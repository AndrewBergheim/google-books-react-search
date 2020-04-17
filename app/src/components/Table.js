
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {bookData: this.props.data, searchVal: null}
        }

        search(searchVal){
            
        }

        createTableRows(book){
            let data = this.state.bookData;
            //console.log(data)
            if (bookdata.length > 0){
                return data.map((book) => {
                    const {title, author, description, image, link} = book
                    const key = book.title
                    return (
                <div class = "book-card" id = {key}>
                    <h3 class = "title">{title}</h3>
                    <h3 class = "card-author">{author}</h3>
                    <p class = "card-description">{description}</p>
                    <img class = "card-image" href= {image} alt = "book cover"/>
                    <button class = "savebutton" onClick = {fetch(`./api/books/`, {type:"POST", data:{
                        title: title,
                        author: author,
                        description: description,
                        image: image
                    }})}></button>
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