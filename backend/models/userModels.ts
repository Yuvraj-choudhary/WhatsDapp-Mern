import mongoose from "mongoose";
const bcrypt = require("bcryptjs");

// @ts-ignore
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    coin: { type: Number, default: 0 },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword:any) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next:any) {
  // @ts-ignore
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  // @ts-ignore
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
