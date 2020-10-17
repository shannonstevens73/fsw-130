import React from 'react'


const redux = require("redux")





function reducer(state = {count: 0}, action) {
  // return new state based on the incoming action.type
  switch(action.type) {
      case "INCREMENT":
          return {
              count: state.count + 1
          }
      case "DECREMENT":
          return {
              count: state.count - 1
          }
      default:
          return state
  }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})



function App() {
  return (
    <div>

      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
      <button>Lap</button>
     
    </div>
  )
}

export default App
