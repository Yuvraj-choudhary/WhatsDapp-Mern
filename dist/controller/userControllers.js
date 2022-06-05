"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generateToken = require("../config/getToken");
const User = require("../models/userModels");
const registerUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { name, email, password, pic, coin } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Felids");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
        coin
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Failed to Create The user");
    }
});
const authUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});
const allUsers = (0, express_async_handler_1.default)(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};
    // @ts-ignore
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});
module.exports = { registerUser, authUser, allUsers };
//# sourceMappingURL=userControllers.js.map