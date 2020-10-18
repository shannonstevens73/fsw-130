import redux, {createStore} from "redux"

export function timerStart() {
    return {
        type: "START_COUNT"
    }
}

export function timerStop() {
    return {
        type: "STOP_COUNT"
    }
}

// export function lapCount() {
//     return {
//         type: "LAP"
//     }
//}

let time = new Date(0)
let mills = time.getMilliseconds(0)
let secs = time.getSeconds(0)
let mins = time.getMinutes(0)

function reducer(time = 0, action) {

    switch(action.type) {
        case "START_COUNT":
            return setInterval(timerStart)

        case "STOP_COUNT":
            return clearInterval(timerStop)

        // case "LAP":
        //       return lapCount

        default:
            return time
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)