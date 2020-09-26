import React from "react"

import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App(props) {
    return (
        <div>
            <p>{props.data}</p>
            <Header data={props.headerData}/>
            <Main />
            <Footer />
        </div>
    )
}

export default App
