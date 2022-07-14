import mongoose from "../../../server"
import { Schema } from "mongoose"
const profileSchema = new Schema({
  posts: {
    type: String,
    required: true,
    minLength: 2
  },
  followers: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  following: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
})

export default mongoose.model('Profile', profileSchema)