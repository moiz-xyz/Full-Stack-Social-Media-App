import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  postTitle: {
    type: String,
    required: true, 
  },
  postDiscription: {
    type: String,
    required: true, 
  },

    authorName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const Post = model("Post", UserSchema);
export default Post;