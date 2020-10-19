// import React, {useState} from "react"
// import {connect} from "react-redux"
// import {timerStart, timerStop} from "./Time"

// // const [lapListUpdate] = useState(0)

// // lapListUpdate=(event) => {
// //   event.preventDefault()
// //   this.setState({
// //     lapList: lapCount.concat({lapCount})
// //   })
// // }

// function App(props) {

//   const startTimer = () => {
//     setInterval(() => {
//   props.timerStart()}, 1)
//   }

//   return (
//     <div>

//   <h1>{props.time/1000 > 60 ? `${Math.floor((props.time/1000)/60)} ` : 0} minutes {props.time > 1000 ? `${Math.floor(props.time/1000)} ` : 0} seconds {props.time} milliseconds</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={props.timerStop}>Stop</button>
//       <button onClick={props.timerStop, props.timerStart}>Reset</button>
//       {/* <button onClick={lapListUpdate}>Lap</button> */}
     
//     </div>
//   )
// }

// export default connect(state => ({time: state}), {timerStart, timerStop})(App)
