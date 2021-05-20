import React, { Component } from 'react'
import { ThemeContextfn } from './Context/ThemeContext'
import './Styles/nav.css'
class Nav extends Component {
    static contextType = ThemeContextfn
    
    render() {
        const {isLightTheme,light,dark} = this.context
        const Theme = isLightTheme ? light : dark
        return (
            <div style={{background : Theme.background}} className="navigation-container">
                <ul>
                    <li style={{color : Theme.syntax}}>Home</li>
                    <li style={{color : Theme.syntax}}>Contact</li>
                    <li style={{color : Theme.syntax}}>Library</li>
                </ul>
            </div>        
        );
    }
}

export default Nav;