const mongoose = require("mongoose")
const db = mongoose.createConnection('mongodb://localhost/google-books-react-search');
module.exports = db