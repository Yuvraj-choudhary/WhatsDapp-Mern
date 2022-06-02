const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const path = require("path");
const Pusher = require("pusher");
const mongoose = require("mongoose");
const cors = require("cors");

const pusher = new Pusher({
    appId: "1364139",
    key: "3fbcbada485cb2c5e9de",
    secret: "dedb2864dc947601fa1c",
    cluster: "ap2",
    useTLS: true,
});

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

const db = mongoose.connection;

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
        } else {
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

app.use(express.json({limit: "100000000000mb", extended: true}));

const PORT = process.env.PORT || 8000;

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


app.get("/", (req, res) => {
    res.send("API is running..");
});

app.use(notFound);
app.use(errorHandler);

const server = app.listen(
    PORT,
    console.log(`Server listening on http://localhost:${PORT}`)
);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
    },
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

        if (!chat.users) return console.log("chat.users not defined");

        chat.users.forEach((user) => {
            if (user._id == newMessageRecieved.sender._id) return;

            socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
    });

    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
    });
});