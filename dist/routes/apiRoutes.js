"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { registerUser, authUser, allUsers, } = require("../controller/userControllers");
const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");
const router = express_1.default.Router();
router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
router.use("/message", messageRoutes);
module.exports = router;
//# sourceMappingURL=apiRoutes.js.map