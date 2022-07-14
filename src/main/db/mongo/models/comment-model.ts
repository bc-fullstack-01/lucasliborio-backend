import mongoose from "../../../server"
import { Schema } from "mongoose"
const CommentsSchema = new Schema({
  content: {
    type: String,
    required: true,
    minLength: 2
  },
  likes: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Posts"
  }
}, {
  timestamps: true
})

export default mongoose.model("Comment", CommentsSchema)