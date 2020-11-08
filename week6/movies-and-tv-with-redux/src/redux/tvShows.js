import { createStore } from 'redux'
const redux = require("redux")

export function addTVShows() {
    return {
        type: "ADD_TVSHOWS"
    }
}

export function deleteTVShows(id) {
    return {
        type: "DELETE_TVSHOWS",
        payload: id
    }
}

export function getAllTVShows(shows) {
    return {
        type: "GET_TVSHOWS",
        payload: shows
    }
}

export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}

const initialState = {
    tvShows: [],
    show: ""
}

export default function tvShowsReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_TVSHOWS":
            return {
                ...state,
                tvShows: [...state.tvShows, state.show], show: ""
            }
        case "DELETE_TVSHOWS": 
        let newTVshows = [...state.tvShows] 
        newTVshows.splice(action.payload, 1)
        return {
            ...state,
            tvShows: newTVshows
        }
        case "GET_TVSHOWS":
            return [...state.tvShows]
        case "SET_INPUTS": 
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        default:
            return state
    }
}

// const store = createStore(tvShowsReducer)
// store.subscribe(() => console.log(store.getState()))
// export default store 