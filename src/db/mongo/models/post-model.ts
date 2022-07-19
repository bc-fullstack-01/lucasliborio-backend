import mongoose from "../../../server"
import { Schema } from "mongoose"

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title must have at least 2 characters'],
    minLength: 2
  },
  description: {
    type: String,
    required: [true, 'description must have at least 2 characters'],
    minLength: 2
  },
  profileId: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required:true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  hasImage:{
    type: Boolean,
    default: false
  },
  imageUrl:{
    type: String,
    default: 'none'
  }
}, {
  timestamps: true
})

export default mongoose.model('Post', PostSchema)