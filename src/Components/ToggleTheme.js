import React, { Component } from 'react'
import { ThemeContextfn } from './Context/ThemeContext';

class ToggleTheme extends Component {
    static contextType = ThemeContextfn
    render() {
        const {ToggleTheme} = this.context
        const {isLightTheme , light, dark} = this.context
        const theme = isLightTheme ? light : dark
        
        return (
            <div>
                <button   className="Toggle-Button"style={{ background: theme.ui}} onClick={ToggleTheme}>Toggle</button>
            </div>        
        );
    }
}

export default ToggleTheme;