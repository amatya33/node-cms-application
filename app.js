const app = require("express")();
const { connectDatabase } = require("./database/database");
const mongoose = require("mongoose");

// connecting to database
// Here .then() or async await can be used
// Note: for alternative use the IMPORT EXPORT of the database function

mongoose.connect("mongodb+srv://suprimamatya53:cmspassword@cluster0.saxpjhe.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp").then(()=>{
    console.log("Database connected successfully")
})

// DATABASE CONNECTION FUNCTION (THROUGH IMPORT EXPORT CONCEPT)
connectDatabase()

app.get("/", (req,res)=>{
    res.json({
        status: 200,
        message: "success"
    })
})

app.listen(2000, ()=>{
    console.log("Nodejs has started at port 2000")
})