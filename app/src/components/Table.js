
import React from 'react';
import "./styles.css"
//import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        //this.state = {tableData: employees.meetsCriteria, searchVal: 10}
        }
/*
        createTableRows(user){
            let data = this.state.tableData;
            //console.log(data)
            if (user){
                return data.map((user) => {
                    const {age, name, title, salary} = user
                    const key = user.name
                    return (
                    <tr key = {key}>
                        <td>{age}</td>
                        <td>{name}</td>
                        <td>{title}</td>
                        <td>{salary}</td>
                    </tr>
                    )
                })
            }
            else{return}
        }
*/

    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar" type = "text" onKeyUp= {(event) => {this.setState({searchVal: document.getElementById("searchbar").value})}}></input>
                <div className = "buttonsDiv">              
                    <button onClick = {}></button>                
                </div>
            </div>
            <div id = "tableDiv">
                <table id = "table">
                    <tbody>
                        rows go here
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>)
    }
}




export default Table