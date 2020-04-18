
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchVal: null, results: []}
        }

        search(searchVal){
            
        }

        createTableRows(){
            let data = this.state.results;
            //console.log(data)
            if (data.length > 0){
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
                    <a href = {link}>Go to book</a>
                </div>
                    )
                })
            }
            else{return(
                <div class = "errordiv">
                    Awaiting Search
                </div>
            )}
        }


    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar" type = "text" onKeyUp= {(event) => {this.setState({searchVal: document.getElementById("searchbar").value})}}></input>
                <div className = "buttonsDiv">              
                    <button onClick = {this.search(this.state.searchVal)}>Search</button>                
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