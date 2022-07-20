import mongoose from "../../../server"
import { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'comments cant be empty'],
    minLength: [2, 'comments must have at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'comments cant be empty'],
    minLength: [2, 'comments must have at least 2 characters']
  },
  password: {
    type: String,
    required: [true, 'comments cant be empty'],
    minLength: [2, 'comments must have at least 2 characters']
  },

}, {
  timestamps: true
})

export default mongoose.model("User", UserSchema)