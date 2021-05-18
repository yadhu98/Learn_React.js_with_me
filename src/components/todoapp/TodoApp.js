import React, { Component } from 'react'
import './TodoApp.css'
export default class TodoApp extends Component {
    state ={
        input : "",
        items : []
    }

    storeItems = (event)=>{
        event.preventDefault();//the page refreshes when we type anything ,so when we typed the element it first stores then the refresh happens followed by loss of that element,inorder to stop that we use this line
        const {input} = this.state;
        const allItems = this.state.items;
        allItems.push(input)
        this.setState({
            items : allItems,
            input : ""//After submiting the text box contains the text inorder to delete it after entering we use this line
        })
    }


    handleChange=(e)=>{
        this.setState({input : e.target.value})

    }

    deleteTask = (k)=>{
        const allItems = this.state.items
        // console.log(k)
        allItems.splice(k, 1)
        this.setState(
            {
                items : allItems
            }
        )
    }
        render() {
            const {input,items} = this.state
            console.log({items})
        return (
            <div>
            <form className="Todo-container" onSubmit={this.storeItems}>
                <h1 className="Todo-title">To Do List</h1>
                <input type="text" value={input} className="Task-text" onChange={this.handleChange}/>
                {/* <button className="Button-add">Add Task</button> */}
                <ul className="Todo-List">
                    {/* <li>Drinking <i className="fas fa-trash-alt" style={{textAlign : "right" , flex : "1"}}></i></li> */}
                    {/* <li>Sleeping <i className="fas fa-trash-alt" style={{textAlign : "right" , flex : "1"}}></i></li> */}
                    {items.map((item,index) => <li key={index} >{item}<i onClick={()=>{this.deleteTask(index)}} className="fas fa-trash-alt" style={{textAlign : "right" , flex : "1", cursor :"pointer"}}></i></li>)}
                </ul>
            </form>
        </div>

        )
    }
}
