import mongoose from ".."
import { Schema } from "mongoose"
const CommentsSchema = new Schema({
    content:{
        type:String,
        required: true,
        minLength: 2
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref: 'Posts'
    }
})

export default mongoose.model('Comment', CommentsSchema)