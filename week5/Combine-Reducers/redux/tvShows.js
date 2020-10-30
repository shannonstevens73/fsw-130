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
        default:
            return tvShows
    }
}

module.exports = { addTVShows, deleteTVShows, getAllTVShows, tvShowsReducer }

        
