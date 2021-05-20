
import React, { Component } from 'react'
import { ThemeContextfn } from './Context/ThemeContext'
import './Styles/Booklist.css'
class BookList  extends Component {
    constructor(){
        super()
        this.state = {
            name : ' ',
            items : [ ]
        }
    }
    static contextType = ThemeContextfn
    EventHandle=(event)=>{
        this.setState({
            name : event.target.value
        })
    }
    Additem = () =>{
        const {name} = this.state
        const AllItems = this.state.items
        AllItems.push(name)
        this.setState({
            items : AllItems,
        })
    }
    render() {
        const {items} = this.state
        const {isLightTheme , light, dark} = this.context
        const Theme = isLightTheme ? light : dark 
        return (
            <div style={{background: Theme.background}}className="BookList-container">
                    <input style={{color: Theme.syntax , background: Theme.textbox}}className="Input-book" type= "text" onChange={this.EventHandle}/>
                    <button style={{color: Theme.syntax , background: Theme.ui}} onClick={this.Additem}>Add Book</button>
                    <ul>
                        {items.map((item,index)=><li style={{color: Theme.syntax , background : Theme.ui}}key={index}>{item}</li>)}
                    </ul>
            </div>
         );
}
}

export default BookList