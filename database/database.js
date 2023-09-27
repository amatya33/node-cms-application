const mongoose = require("mongoose");

exports.connectDatabase = async()=>{
    // connecting to database
    // jaba samma database sanga connect hudaena wait garr
    
    // await mongoose.connect("mongodb+srv://suprimamatya53:cmspassword@cluster0.saxpjhe.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    // console.log("Database connected successfully")

    mongoose.connect("mongodb+srv://suprimamatya53:cmspassword@cluster0.saxpjhe.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    .then(()=>{
        console.log("Database connected successfully")
    })
}