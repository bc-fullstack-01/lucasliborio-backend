import mongoose from ".."
import { Schema } from "mongoose"

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLength: 2
    },
    email:{
        type:String,
        required: true,
        minLength: 2
    },
    password:{
        type:String,
        required: true,
        minLength: 2
    }
})

export default mongoose.model('User', UserSchema)