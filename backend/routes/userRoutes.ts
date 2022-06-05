import express from "express";
const {registerUser, authUser, allUsers}:any = require("../controller/userControllers");
const { protect }:any = require("../middleware/authMiddleWare");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
