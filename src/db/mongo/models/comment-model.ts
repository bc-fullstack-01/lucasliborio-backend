import {mongoose} from "../../../server"
import { Schema } from "mongoose"
const CommentsSchema = new Schema({
  content: {
    type: String,
    required: [true, 'comments cant be empty'],
    minLength: [2, 'comments must have at least 2 characters']
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Posts"
  },
  profileId:{
    type: Schema.Types.ObjectId,
    ref:"Profile"
  }
}, {
  timestamps: true
})

export default mongoose.model("Comment", CommentsSchema)