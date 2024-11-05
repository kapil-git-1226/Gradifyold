import mongoose from "mongoose"
const teamschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    enrollmentno:{
        type:Number,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    coverimage:{
        type:String
    }
})
export const team = mongoose.model("team" , teamschema)