"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// @ts-ignore
const messageSchema = mongoose_1.default.Schema({
    sender: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true, default: "" },
    image: String,
    file: { type: String, default: "" },
    star: { type: Boolean, default: false },
    audio: { type: String, trim: true, default: "" },
    video: { type: String, trim: true, default: "" },
    gif: { type: String, trim: true, default: "" },
    chat: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });
const Message = mongoose_1.default.model("Message", messageSchema);
module.exports = Message;
//# sourceMappingURL=messageModel.js.map