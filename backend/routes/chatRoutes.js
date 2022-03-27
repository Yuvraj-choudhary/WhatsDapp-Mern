const { protect } = require("../middleware/authMiddleWare");
const express = require("express");
const {
  addToGroup,
  removeFromGroup,
  renameGroup,
  createGroupChat,
  fetchChats,
  accessChat,
  deleteChat,
} = require("../controller/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/remove").put(protect, deleteChat);

module.exports = router;
