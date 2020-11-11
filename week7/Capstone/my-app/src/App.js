import React from "react"
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./components/Home"
import FavoriteBooks from "./components/FavoriteBooks"
import BooksAndCats from "./components/BooksAndCats"

function App() {
  return (
    <div>
      <Navbar />      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/FavoriteBooks" component={FavoriteBooks}/>
            <Route path="/BooksAndCats" component={BooksAndCats}/>
        </Switch>
    </div>
  
  )
}
        

export default App
