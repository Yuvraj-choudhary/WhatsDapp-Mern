"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModels");
const sendMessage = (0, express_async_handler_1.default)(async (req, res) => {
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
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});
const allMessages = (0, express_async_handler_1.default)(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        res.json(messages);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});
const deleteDocument = (0, express_async_handler_1.default)(async (req, res) => {
    const { _id } = req.body;
    try {
        const remove = await Message.deleteOne({ _id });
        res.json(remove);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});
module.exports = { sendMessage, allMessages, deleteDocument };
//# sourceMappingURL=messageControllers.js.map