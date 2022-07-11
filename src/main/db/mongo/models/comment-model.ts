import mongoose from ".."
import { Schema } from "mongoose"
const CommentsSchema = new Schema({
    description:{
        type:String,
        required: true,
        minLength: 2
    },
    post:{
        type:Schema.Types.ObjectId,
        ref: 'Posts'
    }
})

export default mongoose.model('Comment', CommentsSchema)