import mongoose from "../../../server"
import { Schema } from "mongoose"
const profileSchema = new Schema({
  username: {
    type: String,
    minlength: 5
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post",
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
})

profileSchema.index({ username: 'text' })
export default mongoose.model("Profile", profileSchema)