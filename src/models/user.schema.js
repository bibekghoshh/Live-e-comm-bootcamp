import mongoose from 'mongoose';
import AuthRoles from '../utils/authRoles.js';

const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true,"NAme is required"],
        maxLength: [50,"name must be less then 50 chars"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minLength:[8,"must be at least 8 chars"],
        select: false
    },
    role:{
        type:String,
        enum: Object.values(AuthRoles),
        default:AuthRoles.USER
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry:Date
    },
    {timestamps:true}
)


export default mongoose.model("User",userSchema);