import {createStore} from "redux"

export function timerStart() {
    return {
        type: "START"
    }
}

export function timerStop() {
    return {
        type: "STOP"
    }
}

export function timerReset() {
    return {
        type: "RESET"
    }
}
export function timerLap() {
    return {
        type: "LAP"
    }
}



const timerState ={
    hour:0,
    minutes: 0,
    seconds:0,
    milliseconds:0,
    timerState : ""
}

let milliseconds = 0
   setInterval(() => {
       milliseconds+= 5000
    }, 5000)


function reducer( state = timerState, action) {

    switch(action.type) {
        case "START":
           return {...timerState, timerState:action.type,milliseconds:milliseconds}
        case "STOP":
            return {...timerState, timerState:"STOP"}
        case "RESET":
            milliseconds =0 
                return {...timerState, timerState:action.type, milliseconds:milliseconds}
        case "LAP":
              return {...timerState, timerState:action.type}
        default:
            return {...timerState, timerState:""}
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
