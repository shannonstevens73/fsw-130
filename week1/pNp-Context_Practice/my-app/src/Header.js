import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>Data Passed from App Parent {props.data} themes  are {context.theme === "light" ? "Light" : "Dark"}</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header