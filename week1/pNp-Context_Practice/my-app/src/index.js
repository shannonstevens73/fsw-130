import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {ThemeContextProvider} from "./themeContext"
import './styles.css'

const  myAppName = "Week 1 Assignment is comeplete";
const  myHeaderData = "Header for Week 1";

ReactDOM.render(
    <ThemeContextProvider>
        <App data ={myAppName} headerData ={myHeaderData}></App>
    </ThemeContextProvider>, 
    document.getElementById("root")
)
