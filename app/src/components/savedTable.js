
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class SavedTable extends React.Component{
    constructor(props){
        super(props);
        this.state = ({bookData: []})
        }


        async componentDidMount(){
            console.log("begun")
            let data = await fetch("/api/books", {type: "GET"});
            let parsed = await data.json()
            console.log(parsed)
            this.setState({bookData: parsed});
            }
    

        createTableRows(){
            let data = this.state.bookData;
            //console.log(data)
            if (data.length > 0){
                return data.map((books) => {
                    const {_id, title, author, description, image, link} = books
                    return (
                <div className = "book-card" key = {_id}>
                    <h3 className = "title">{title}</h3>
                    <h3 className = "card-author">{author}</h3>
                    <p className = "card-description">{description}</p>
                    <img className = "card-image" src= {image} alt = "book cover"/>
                    <button className = "savebutton" id = {_id} onClick = {() => fetch(`/api/books/` + _id, {method:"DELETE"})}>Delete Book From Saved</button>
                    <a href = {link}>{image}</a>
                </div>
                    )
                })
            }
            else{return (
                <h6>Saved Books are Loading or Empty</h6>
            )}
        }


    render() {
    return (  <div id = "tableWrapper">
            <div id = "books-div">
                {this.createTableRows()}
                </div>
            </div>
        )
    }
}




export default SavedTable