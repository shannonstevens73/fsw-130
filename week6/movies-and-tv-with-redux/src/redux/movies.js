import { createStore } from 'redux'
const redux = require("redux")

export function addMovie() {
    return {
        type: "ADD_MOVIE"
    }
}

export function deleteMovie(id) {
    return {
        type: "DELETE_MOVIE",
        payload: id
    }
}
export function getAllMovies(movie) {
    return {
        type: "GET_MOVIES",
        payload: movie
    }
}

export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}

const initialState = {
    movies: [],
    movie: ""
}

export default function moviesReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [...state.movies, state.movie], movie: ""
            }
        case "DELETE_MOVIE":          
        let newMovies = [...state.movies] 
        newMovies.splice(action.payload, 1)
        return {
            ...state,
            movies: newMovies
        }
        case "GET_MOVIES":
            return [...state]
        case "SET_INPUTS": 
            return {
                ...state,
                [action.payload.name] : action.payload.value
            } 
        default:
            return state
    }
}

// const store = createStore(moviesReducer)
// store.subscribe(() => console.log(store.getState()))
// export default store