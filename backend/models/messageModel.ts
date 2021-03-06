import mongoose from "mongoose";

// @ts-ignore
const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true, default: "" },
    image: String,
    file: { type: String, default: "" },
    star: { type: Boolean, default: false },
    audio: { type: String, trim: true, default: "" },
    video: { type: String, trim: true, default: "" },
    gif: { type: String, trim: true, default: "" },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
