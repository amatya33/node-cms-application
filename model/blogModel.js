const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Schema banayeko
const blogSchema = new Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    description: {
        type: String
    }
},{
    timestamps: true
})

// model banaidey mongoose
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog

// Alternative of above two lines
// module.exports = mongoose.model("Blog", blogSchema)