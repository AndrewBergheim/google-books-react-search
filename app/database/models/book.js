let db = require("../db");
const mongoose = require("mongoose");
let bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    description: String,
    image: String, 
    link: String,
})

let Book = db.model("Book", bookSchema)


module.exports = Book