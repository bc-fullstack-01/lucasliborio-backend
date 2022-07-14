import mongoose from "../../../server"
import { Schema } from "mongoose"

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2
  },
  description: {
    type: String,
    required: true,
    minLength: 2
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  profileId: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
}, {
  timestamps: true
})

export default mongoose.model('Post', PostSchema)