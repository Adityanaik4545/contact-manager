const express=require("express")
const dotenv=require("dotenv").config()
const contact=require("./routes/contactRoute")
const app=express()
const port=process.env.PORT || 3000;
app.use("/api/contacts",contact)
app.listen(port,()=>{
    console.log("server started on",port);
    
})