const express = require("express")
const connectdb = require("./config/connectiondb")
const errorHandler = require("./middleware/errorHandler")
const dotenv = require("dotenv").config()
const contact = require("./routes/contactRoute")
const user = require("./routes/userRoutes")
connectdb();
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000;
app.use("/api/contacts", contact)
app.use("/api/user", user)
app.use(errorHandler)
app.listen(port, () => {
    console.log("server started on", port);

})