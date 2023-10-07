const { connectDatabase } = require("./database/database");
const mongoose = require("mongoose");
const Blog = require("./model/blogModel");

const express = require("express");
const app = express();

// node js lai form bata ayeko data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extend:true}))

// connecting to database
// Here .then() or async await can be used
// Note: for alternative use the IMPORT EXPORT of the database function
// mongoose.connect("mongodb+srv://user1:user1@cluster0.mfvljhb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp").then(()=>{
//         console.log("Database connected successfully")
//     })

// DATABASE CONNECTION FUNCTION (THROUGH IMPORT EXPORT CONCEPT)
connectDatabase()

// GET API -> /
app.get("/", (req,res)=>{
    res.json({
        status: 200,
        message: "success"
    })
})

// CREATE BLOG API
app.post("/createBlog",async (req,res)=>{

    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    console.log(title, subTitle, description)
    // Alternative of above: object destructuring
    // const {title, subTitle, description} = req.body

    // Insert into database logic here
    await Blog.create({
        title : title,
        subTitle : subTitle,
        description : description
    })

    // res.json({
    //     status: 201,
    //     message: "Blog created successfully"
    // })

    // alternative of above
    res.status(201).json({
        message: "Blog created successfully"
    })
})

app.listen(2000, ()=>{
    console.log("Nodejs has started at port 2000")
})