import mongoose from "../../../server"
import { Schema } from "mongoose"
const profileSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username cant be empty'],
    minlength: [5, 'username must have at least 5 characters']
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