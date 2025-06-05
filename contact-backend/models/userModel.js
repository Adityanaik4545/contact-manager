const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter the name"],
    },
    email:{
        type:String,
        required:[true,"please enter the email"],
        unique:[true,"this email already exist"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
    },
},
{
    timestamps:true
})
module.exports=mongoose.model("User",userSchema)