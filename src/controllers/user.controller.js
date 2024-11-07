import {User} from "../models/user.model.js"
const signupuser = async(req,res)=>{
    const {fullname,enrollmentno,email,password} = req.body
    if (
        [fullname,email,enrollmentno,password].some((fields)=> fields?.trim() ==="")    
    ) {
        res.status(201).json(
            {
                message: "Please fill all the fields",
                statuscode : 201
            }
        )
    }
    if (!email.includes('@')) {
        return res.status(201).json(
            {
                message: "Invalid email",
                statuscode : 201
            }
        )
    }
    const existeduser = await User.findOne({
        $or:[{enrollmentno},{email}]
    })
    if (existeduser) {
        return res.status(201).json(
            {
                message: "User already exists",
                statuscode : 201
            }
        )
    }
    const coverimagelocalpath = req.files?.coverimage[0]?.path
    if(!coverimagelocalpath){
        res.status(400).json(
            {
                message: "Please upload a cover image",
                statuscode : 400
            }
        )
    }
    const coverimage = await uploadoncloudinary(coverimagelocalpath)
    const createduser = await User.create({
        fullname,
        email,
        enrollmentno,
        password,
        coverimage:coverimage?.url || ""
    })
    if (!createduser){
        return res.status(201).json(
            {
                message: "Failed to create user",
                statuscode : 201
            }
        )
    }else{
        return res.status(201).json(
            {
                message: "User created successfully",
                statuscode : 201
            }
        )
    }
}

const loginuser = async(req,res)=>{
    const {email,password} = req.body
    if (
        [email,password].some((fields)=> fields?.trim() ==="")    
    ) {
        res.status(201).json(
            {
                message: "Please fill all the fields",
                statuscode : 201
            }
        )
    }
    if (!email.includes('@')) {
        res.status(201).json(
            {
                message: "Invalid email",
                statuscode : 201
            }
        )
    }
    const user = await User.findOne({
        $or:[{email}]
    })
    if(!user){
        res.status(201).json(
            {
                message: "User not found",
                statuscode : 201
            }
        )
    }
    if(password == user.password){
        res.status(201).json(
            {
                message: "User logged in successfully",
                statuscode : 201
            }
        )
    }
}

export {
    signupuser,
    loginuser
}