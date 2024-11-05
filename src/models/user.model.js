import mongoose from "mongoose"
const userschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"fullname is required"],
        trim:true
    },
    enrollmentno:{
        type:Number,
        required:[true,"enrollmentno is required"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true
    },
    coverimage:{
        type:String
    }
})
export const User = mongoose.model("User",userschema)