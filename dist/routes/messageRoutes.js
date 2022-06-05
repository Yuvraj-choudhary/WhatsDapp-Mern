"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { allMessages, sendMessage, deleteDocument, uploadDocument } = require('../controller/messageControllers');
const { protect } = require('../middleware/authMiddleWare');
const router = express_1.default.Router();
router.route('/').post(protect, sendMessage);
router.route('/messages').put(protect, deleteDocument);
router.route('/:chatId').get(protect, allMessages);
module.exports = router;
//# sourceMappingURL=messageRoutes.js.map