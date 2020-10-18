import React from "react"
import {connect} from "react-redux"
import {timerStart, timerStop, lapCount} from "./redux"


function App(props) {
  return (
    <div>

      <h1>{props.time}</h1>
      <button onClick={props.timerStart}>Start</button>
      <button onClick={props.timerStop}>Stop</button>
      <button onClick={props.timerStart}>Reset</button>
      {/* <button onClick={props.decrement}>Lap</button> */}
     
    </div>
  )
}

export default connect(state => ({count: state}), {increment, decrement})(App)
