import asyncHandler from "express-async-handler";
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModels");

const sendMessage = asyncHandler(async (req:any, res:any) => {
  const { content, chatId, image, audio, gif, video, file, star } = req.body;

  if (!chatId) {
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    image: image,
    audio: audio,
    gif: gif,
    video: video,
    file: file,
    chat: chatId,
    star: star,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic").execPopulate();
    message = await message.populate("chat").execPopulate();
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error:any) {
    res.status(400);
    throw new Error(error.message);
  }
});

const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error:any) {
    res.status(400);
    throw new Error(error.message);
  }
});

const deleteDocument = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  try {
    const remove = await Message.deleteOne({ _id });

    res.json(remove);
  } catch (error:any) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { sendMessage, allMessages, deleteDocument };
