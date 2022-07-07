import mongoose from "../db/mongodb"
import { Schema } from "mongoose"
const CommentsSchema = new Schema({
    description:{
        type:String,
        required: true,
        minLength: 2
    },
    post:{
        type:Schema.Types.ObjectId,
        ref: 'Post'
    }
})

export default mongoose.model('Comment', CommentsSchema)