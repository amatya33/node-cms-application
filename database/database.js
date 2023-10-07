const mongoose = require("mongoose");

exports.connectDatabase = async()=>{
    // connecting to database
    // jaba samma database sanga connect hudaena wait garr

    await mongoose.connect("mongodb+srv://user1:user1@cluster0.mfvljhb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    .then(()=>{
        console.log("Database connected successfully")
    })
}