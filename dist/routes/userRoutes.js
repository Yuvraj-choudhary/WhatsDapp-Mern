"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { registerUser, authUser, allUsers } = require("../controller/userControllers");
const { protect } = require("../middleware/authMiddleWare");
const router = express_1.default.Router();
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
module.exports = router;
//# sourceMappingURL=userRoutes.js.map