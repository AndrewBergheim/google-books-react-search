const express = require('express');
const app = express();
//const mongoose = require("mongoose")
const Books = require("./database/models/book.js")
let bodyparser = require('body-parser')
app.use(bodyparser.text())
let cors = require("cors")
app.use(cors())

app.delete("/api/books/:id", function (req, res) {
    console.log(req.params)
    let data = req.params.id
    Books.deleteOne({_id: data}).then(function(){ console.log(`deleted book with id ${data} `);res.end()})
});
app.get('/api/books', function (req, res) {
    console.log("received")
    Books.find({})
    .then(function(data){
        console.log(data); 
        res.json((data))
    })
});

app.post('/api/books/', function (req, res) {
    console.log(req.body)
    let data = JSON.parse(req.body)
    let datObject = new Books({
        id: data.id,
        title: data.title,
        author: data.author,
        description: data.description,
        image: data.image,
        link: data.link,
    })
    
    datObject.save((err) => {if (err){console.log(err)}else{console.log("success")}})
    
    res.end()
    
});


app.listen(process.env.PORT || 8080);