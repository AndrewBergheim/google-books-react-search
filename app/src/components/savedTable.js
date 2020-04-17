
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {bookData: this.props.data}
        }

        createTableRows(books){
            let data = this.state.bookData;
            //console.log(data)
            if (books.length > 0){
                return data.map((books) => {
                    const {id, title, author, description, image, link} = books
                    const key = book.id
                    return (
                <div class = "book-card" id = {key}>
                    <h3 class = "title">{title}</h3>
                    <h3 class = "card-author">{author}</h3>
                    <p class = "card-description">{description}</p>
                    <img class = "card-image" href= {image} alt = "book cover"/>
                    <button class = "savebutton" id = {id} onClick = {fetch(`./api/books/` + id, {type:"DELETE"})}>Delete Book From Saved</button>
                    <a href = {link}></a>
                </div>
                    )
                })
            }
            else{return}
        }


    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar" type = "text" onKeyUp= {(event) => {this.setState({searchVal: document.getElementById("searchbar").value})}}></input>
                <div className = "buttonsDiv">              
                    <button onClick = {}></button>                
                </div>
            </div>
            <div id = "books-div">
                
            </div>
            <div>

            </div>
        </div>)
    }
}




export default Table