import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`} id="footer">
                    <p>Shannon Stevens</p>
                    <p>September 2020</p>
                </footer>
            )}
        </ThemeContextConsumer>

    )    
}

export default Footer
