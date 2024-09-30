import { Schema, model } from "mongoose";
import User from "./user-models.js";
const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  //   rentedBy: {
  //     type: Schema.ObjectId,
  //     ref: "User",
  //     required: false,
  //   },
});

const Post = model("Post", postSchema);

export default Post;
