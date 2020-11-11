import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {BookContextProvider} from "./context/bookContext"
import {CatBookContextProvider} from "./context/cutePicsContext"
import './index.css'

ReactDOM.render(
    <CatBookContextProvider>
    <BookContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BookContextProvider>
    </CatBookContextProvider>,
    document.getElementById('root')
)
