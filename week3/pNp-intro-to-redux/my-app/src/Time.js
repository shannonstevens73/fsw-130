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
    interval: 5000,
    timerState : ""
}


function reducer( state = timerState, action) {
    
    switch(action.type) {
        case "START":
           return {...timerState, timerState:action.type,milliseconds:state.milliseconds+state.interval}
        case "STOP":
            return {...timerState, timerState:action.type}
        case "RESET":
                return {...timerState, timerState:action.type, milliseconds:0}
        case "LAP":
              return {...timerState, timerState:action.type}
        default:
            return {...timerState, timerState:state.timerState}
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
