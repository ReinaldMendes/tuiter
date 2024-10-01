import { Schema, model } from "mongoose";
import User from "./user-models.js";
const postSchema = new Schema(
  {
    text: {
      type: String,
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timesstamps: true }
);

const Post = model("Post", postSchema);

export default Post;
