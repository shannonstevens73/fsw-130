import { createStore } from 'redux'
const redux = require("redux")

function addTVShows(shows) {
    return {
        type: "ADD_TVSHOWS",
        payload: shows
    }
}

function deleteTVShows(shows) {
    return {
        type: "DELETE_TVSHOWS",
        payload: shows
    }
}

function getAllTVShows(shows) {
    return {
        type: "GET_TVSHOWS",
        payload: shows
    }
}

function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}

const initialState = {
    tvShows: [],
    show: ""
}

function tvShowsReducer(tvShows = [], action) {
    switch(action.type) {
        case "ADD_TVSHOWS":
            return [...tvShows, action.payload]
        case "DELETE_TVSHOWS": {            
            const updatedArr = tvShows.filter(shows => shows.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_TVSHOWS":
            return [...tvShows]
        case "SET_INPUTS": 
            console.log(action.payload)
            return {
                ...state,
                [action.payload.shows] : action.payload.value
            }
        default:
            return tvShows
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store

        
