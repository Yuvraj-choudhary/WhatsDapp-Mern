"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { protect } = require("../middleware/authMiddleWare");
const express_1 = __importDefault(require("express"));
const { addToGroup, removeFromGroup, renameGroup, createGroupChat, fetchChats, accessChat, deleteChat, } = require("../controller/chatControllers");
const router = express_1.default.Router();
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/remove").put(protect, deleteChat);
module.exports = router;
//# sourceMappingURL=chatRoutes.js.map