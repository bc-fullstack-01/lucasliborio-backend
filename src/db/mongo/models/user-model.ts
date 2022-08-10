import {mongoose} from "../../../server"
import { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username cant be empty'],
    minLength: [5, 'username must have at least 5 characters']
  },
  email: {
    unique: true,
    type: String,
    required: [true, 'email cant be empty'],
    minLength: [2, 'email must have at least 2 characters'],
    dropDups: true
    
  },
  password: {
    type: String,
    required: [true, 'password cant be empty'],
    minLength: [2, 'password must have at least 2 characters']
  },

}, {
  timestamps: true
})

export default mongoose.model("User", UserSchema)