import mongoose from "../../../server"
import { Schema } from "mongoose"

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        minLength: 2
    },
    email:{
        type:String,
        required: true,
        minLength: 2,
        unique: true
    },
    password:{
        type:String,
        required: true,
        minLength: 2
    },
    
}, {
  timestamps: true
})

export default mongoose.model("User", UserSchema)