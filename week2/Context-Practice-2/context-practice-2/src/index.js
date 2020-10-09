import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BookContextProvider} from "./bookContext"
import './index.css'

ReactDOM.render(
    <BookContextProvider>
        <App />
    </BookContextProvider>, 
    document.getElementById('root')
)
