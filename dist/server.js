"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pusher_1 = __importDefault(require("pusher"));
const dotenv_1 = __importDefault(require("dotenv"));
const apiRoutes = require("./routes/apiRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const pusher = new pusher_1.default({
    appId: "1364139",
    key: "3fbcbada485cb2c5e9de",
    secret: "dedb2864dc947601fa1c",
    cluster: "ap2",
    useTLS: true,
});
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});
const db = mongoose_1.default.connection;
db.once("open", () => {
    console.log(`Database connection established`);
    const msgCollection = db.collection("messages");
    const chatCollection = db.collection("chats");
    const changeStreamMsg = msgCollection.watch();
    const changeStreamChat = chatCollection.watch();
    changeStreamMsg.on("change", (change) => {
        console.log(change);
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                content: messageDetails.content,
                file: messageDetails.file,
                audio: messageDetails.audio,
                video: messageDetails.video,
                image: messageDetails.image,
                gif: messageDetails.gif,
                readBy: messageDetails.readBy,
                sender: messageDetails.sender,
                chat: messageDetails.chat
            });
        }
        else {
            console.log("Error triggering Pusher");
        }
    });
    changeStreamChat.on("change", (change) => {
        console.log(change);
        if (change.operationType === "update") {
            const chatDetails = change.updateDescription.updatedFields;
            pusher.trigger("chats", "updated", {
                chatName: chatDetails.chatName,
                pic: chatDetails.pic,
                latestMessage: chatDetails.latestMessage,
            });
        }
    });
});
// @ts-ignore
app.use(express_1.default.json({ limit: "100000000000mb", extended: true }));
const PORT = process.env.PORT || 8000;
app.use("/api", apiRoutes);
// ------------------------->DeployMent<-------------------------
const __dirname1 = path_1.default.resolve();
app.use(express_1.default.static(path_1.default.join(__dirname1, "/frontend/dist")));
app.get("*", (req, res) => res.sendFile(path_1.default.resolve(__dirname1, "frontend", "dist", "index.html")));
// ------------------------->DeployMent<-------------------------
app.use(notFound);
app.use(errorHandler);
const server = app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
const io = require("socket.io")(server, {
    origin: "http://localhost:8000",
    credentials: true
});
io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
    });
    socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
    });
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
        if (!chat.users)
            return console.log("chat.users not defined");
        chat.users.forEach((user) => {
            if (user._id == newMessageRecieved.sender._id)
                return;
            socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
    });
    socket.off("setup", (userData) => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
    });
});
//# sourceMappingURL=server.js.map