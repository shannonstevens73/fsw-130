const redux = require("redux")
const { combineReducers, createStore } = redux
const  moviesReducer  = require("./movies")
const  tvShowsReducer  = require("./tvShows")

const rootReducer = combineReducers({
    movies: moviesReducer.default,
    tvShows: tvShowsReducer.default
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store