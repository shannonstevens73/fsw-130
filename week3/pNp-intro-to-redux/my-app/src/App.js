import React, {useState} from "react"
import {connect} from "react-redux"
import {timerStart, timerStop, timerReset, timerLap} from "./Time"

// const [lapListUpdate] = useState(0)

// lapListUpdate=(event) => {
//   event.preventDefault()
//   this.setState({
//     lapList: lapCount.concat({lapCount})
//   })
// }

function App(props) {
  const  {timerState } = props.time;
 
    
    const [state, setState] = useState(props.time)
    setInterval(() => {
      switch(timerState){
        case "START":
          setState({
            ...state, milliseconds: state.milliseconds+ state.interval
          });
          break;
        case "STOP":
          break;
        case "RESET":
          setState({
            ...state, milliseconds: 0
          });
            break;
        default:
            break;
      }
      
    },5000);



  
  return (
    <div>

      <h1> Timer {state.milliseconds}</h1>
      <button onClick={props.timerStart}>Start</button>
      <button onClick={props.timerStop}>Stop</button>
      <button onClick={props.timerReset}>Reset</button>
      <button onClick={props.timerLap}>Lap</button>
     
    </div>
  )
}

export default connect(state => ({time: state}), {timerStart, timerStop, timerReset, timerLap})(App)