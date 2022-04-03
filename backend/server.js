const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
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
});

const db = mongoose.connection;

db.once("open", () => {
  console.log(`Database connection established`);
  const msgCollection = db.collection("messages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        content: messageDetails.content,
        file: messageDetails.file,
        audio: messageDetails.audio,
        video: messageDetails.video,
        gif: messageDetails.gif,
        readBy: messageDetails.readBy,
        sender: messageDetails.sender,
        chat: messageDetails.chat,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

app.use(express.json({ limit: "100000000000mb", extended: true }));
app.use(
  cors({
    origin: "https://chatdapp-mern.herokuapp.com",
  })
);

const PORT = process.env.PORT || 8000;

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// ------------------------->DeployMent<-------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// ------------------------->DeployMent<-------------------------

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
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log(room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessage) => {
    var chat = newMessage.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessage.sender._id) return;

      socket.in(user._id).emit("message received", newMessage);
    });
  });

  socket.on("remove message", (removeMessage) => {
    var chat = removeMessage.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == removeMessage.sender._id) return;

      socket.in(user._id).emit("message deleted", newMessage);
    });
  });

  socket.off("user", () => {
    console.log("User Disconnected");
    socket.leave(userData._id);
  });
});
