import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator(v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        },
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        },
      },
    },
    nickname: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["USER", "ADMINISTRATOR"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
