const mongoose=require("mongoose")
const contactSchema=mongoose.Schema({
        user_id:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"User"
        },
    name:{
            type:String,
            required:[true,"please enter the name"],
    },
    email:{
            type:String,
            required:[true,"please enter the email"],
    },
    phone:{
            type:String,
            required:[true,"please enter the phone number"],
    },
},
{
    timestamps:true
})
module.exports=mongoose.model("Contact",contactSchema)