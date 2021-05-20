import React, { Component,createContext } from 'react'
export const ThemeContextfn = createContext()
class ThemeContext extends Component {
    state = { 
        isLightTheme : true,
        name : " ",
        light : {syntax : 'black' , ui : '#4081bd' , background: 'white' ,textbox:"#9aad9e"},
        dark : {syntax : '#8f68d4' , ui : '#48464d', background : '#19181c', textbox:"#48464d"}
     }
    toggleTheme = ()=>{
        this.setState({
            isLightTheme : ! this.state.isLightTheme
        })
    }
    render() {
        return (
            <ThemeContextfn.Provider value={{...this.state,ToggleTheme : this.toggleTheme}}>
                {this.props.children}
            </ThemeContextfn.Provider>
        );
    }
}

export default ThemeContext;