import express from "express";
const {
    registerUser,
    authUser,
    allUsers,
} = require("../controller/userControllers");
const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
router.use("/message", messageRoutes);

module.exports = router;
