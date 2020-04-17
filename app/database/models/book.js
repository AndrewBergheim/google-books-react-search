const mongoose = require("mongoose")
let bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    image: String, 
    link: String,
})

let Book = new mongoose.model("Book", bookSchema)


module.exports = Book