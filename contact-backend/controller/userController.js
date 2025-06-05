const asyncHandler=require("express-async-handler");
const User=require("../models/userModel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const { default: mongoose } = require("mongoose");
// description: register user  
// route: post /api/user/register
// access: public
const registerUser= asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if (!username || !email ||!password) {
        res.status(400)
        throw new Error("all fields should be filled")
    }
    const userAvailable=await User.findOne({email})
    if (userAvailable) {
        res.status(400)
        throw new Error("user already registered!")
    }
    const hashedPassword=await bcrypt.hash(password,10)
    console.log("this is ur hashed password :",hashedPassword);
    
    const user= await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(`user created ${user}`);
    // display id and email for user if created successfully
    if (user) {
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400)
        throw new Error("invalid user data")
    }
})
// description: login user  
// route: post /api/user/login
// access: public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if (!email ||!password) {
        res.status(400);
        throw new Error("all fields are mandetory")
    }
    const user=await User.findOne({email})
    if (user && (await bcrypt.compare(password,user.password))) {
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },

        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"}
    )
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("invalid email or password")
    }
})
// description: current user  
// route: get /api/user/current
// access: private
const currentUser= asyncHandler(async(req,res)=>{
    res.json(req.user)
})
module.exports={registerUser,loginUser,currentUser}