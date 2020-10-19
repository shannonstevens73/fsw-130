import React, {useEffect} from "react"
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
  const  {timerState, milliseconds }= props.time;
   setInterval(() => {
     
      switch(timerState){
       
        case "START":
          props.timerStart()
          break;
        case "STOP":
          props.timerStop()
          break;
       deafult:
            props.timerStop()
      }
     
   }, 5000)


  
  return (
    <div>

      <h1> Timer {milliseconds}</h1>
      <button onClick={props.timerStart}>Start</button>
      <button onClick={props.timerStop}>Stop</button>
      <button onClick={props.timerReset}>Reset</button>
      <button onClick={props.timerLap}>Lap</button>
     
    </div>
  )
}

export default connect(state => ({time: state}), {timerStart, timerStop, timerReset, timerLap})(App)
