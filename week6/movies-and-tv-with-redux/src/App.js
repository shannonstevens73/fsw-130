import React from "react"
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Movies from './components/Movies'
import TV from './components/TV'

function App() {
  return (
    <div>
      <Navbar />      
      <Switch>
      <Route 
          path="/movies"
          render={() => <Movies />}
        />
        <Route 
          path="/tv"
          render={() => <TV />}
        />
      </Switch>
    </div>
  
  )
}
        

export default App