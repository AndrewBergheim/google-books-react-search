
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = ({bookData: []})
        }


        componentDidMount(){
            fetch("./api/books").then((dat) => {this.setState({bookData: dat})})
        }

        createTableRows(){
            let data = this.state.bookData;
            //console.log(data)
            if (data.length > 0){
                return data.map((books) => {
                    const {id, title, author, description, image, link} = books
                    const key = id
                    return (
                <div class = "book-card" id = {key}>
                    <h3 class = "title">{title}</h3>
                    <h3 class = "card-author">{author}</h3>
                    <p class = "card-description">{description}</p>
                    <img class = "card-image" href= {image} alt = "book cover"/>
                    <button class = "savebutton" id = {id} onClick = {fetch(`./api/books/` + id, {type:"DELETE"})}>Delete Book From Saved</button>
                    <a href = {link}>{image}</a>
                </div>
                    )
                })
            }
            else{return (
                <h6>Saved Loading or Empty</h6>
            )}
        }


    render() {
    return (  <div id = "tableWrapper">
            <div id = "books-div">
                
            </div>
                {this.createTableRows()}
            </div>
        )
    }
}




export default Table