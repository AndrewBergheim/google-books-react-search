const mongoose = require("mongoose")
const db = mongoose.connect('mongodb://localhost/google-books-react-search', {useNewUrlParser: true});
module.exports = db