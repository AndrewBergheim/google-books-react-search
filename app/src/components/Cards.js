
import React from 'react';
import "./styles.css"
function Cards (){
    return (
        <div class = "card">
            <div id = "header">
    <h3 class = "title">{this.props.title}</h3>
                <h3 class = "card-author">{this.props.author}</h3>
                <h3 class = "card-description">{this.props.description}</h3>
                <img class = "card-image" href= {this.props.image} alt = "book cover"/>
                <h3 class = "card-link"><a href = {this.props.link}>Google Books Search</a></h3>
            </div>
            <div>

            </div>
        </div>
    )
}




export default Cards