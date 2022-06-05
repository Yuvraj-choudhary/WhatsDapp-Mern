import express from "express";
const { allMessages, sendMessage,deleteDocument, uploadDocument } = require('../controller/messageControllers');
const { protect } = require('../middleware/authMiddleWare');

const router = express.Router()

router.route('/').post(protect, sendMessage);
router.route('/messages').put(protect, deleteDocument);
router.route('/:chatId').get(protect, allMessages);

module.exports = router;