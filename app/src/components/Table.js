
import React from 'react';
import "./styles.css"
//import employees from "./employees" 
let x = "AIzaSyB3LdItTq-6XAdQQymMIpJNtz8PiBNUoxU"
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchVal: null, results: []}
        }
        

        async send(id, title, authors, description, image){
            console.log("book sending to DB")
            //for production
            let query = `/api/books/`
            //for testing 
            //let query = `http://localhost:8080/api/books/`
            let data = {id: id, title: title, author: authors, description: description, image: image}
            console.log(query)
            fetch( query, {method:"POST", mode: "no-cors", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data), })
            .then((r) => {console.log(r)})
        }
        async search(searchVal){
            if (searchVal){
                let r = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchVal + "&?key=" + x)
                return r.json()
            }
        }

        createTableRows(){
            let data = this.state.results;
            //console.log(data)
            if (data){
                return data.map((book) => {
                    const id = book.id
                    const {title, description} = book.volumeInfo
                    let image;
                    let authors;
                    if (book.volumeInfo.authors === undefined){
                        authors = "Multiple Authors"
                    }else {
                        authors = book.volumeInfo.authors[0]
                    }

                    if (book.volumeInfo.imageLinks === undefined){
                        image = "no image"
                    }else{
                        image = book.volumeInfo.imageLinks.thumbnail
                    }
                    const link = book.volumeInfo.infoLink
                    return (
                <div className = "book-card" key = {id}>
                    <h3 className = "title">{title}</h3>
                    <h3 className = "card-author">{authors}</h3>
                    <p className = "card-description">{description}</p>
                    <img className = "card-image" src= {image} alt = "Book Cover"/>
                    <button className = "savebutton" onClick = {() => {this.send(id, title, authors, description, image)}}>Save to Library</button>
                    <a href = {link}>Go to book</a>
                </div>
                    )
                })
            }
            else{return(
                <div className = "errordiv">
                    Awaiting Search
                </div>
            )}
        }


    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar" type = "text" onKeyUp= {(event) => {this.setState({searchVal: document.getElementById("searchbar").value})}}></input>
                <div className = "buttonsDiv">              
                    <button onClick = {() => {this.search(this.state.searchVal).then((r) => { console.log(r.items); this.setState({ results: r.items})})}}>Search</button>                
                </div>
            </div>
            <div id = "books-div">
                {this.createTableRows()}
            </div>
            <div>

            </div>
        </div>)
    }
}




export default Table