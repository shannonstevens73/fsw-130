import React from "react"
import {connect} from "react-redux"
import {addMovie, deleteMovie, getAllMovies, setInputs} from "../redux/movies.js"

function Movies(props) {    
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        props.setInputs(name, value)
    }
    
    const onclickUpdate = (event) => {
      event.preventDefault()
      props.addMovie()
    }

    const onclickDelete = (event, index) => {
      event.preventDefault()
      props.deleteMovie(index)
    }


    return (
        <div>

            <form>
            <h2 className="heading">My Movie List</h2>

                <input 
                    id="movieText"
                    type="text" 
                    name="movie"
                    value={props.movie}                  
                    placeholder="movie" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.movie}</p>
                <br />

                <button id="submitButton" onClick={onclickUpdate}>Submit</button> 
            </form>            

            {props.movies.map((movies, index) => 
            <div key={index}>
                
                <p id="text">{movies}</p>

                <button id="deleteButton" onClick={(event) => onclickDelete (event, index) }>Delete</button>
            </div>
            )}
        </div>
    )
}

export default connect(state => ({...state.movies, movies: state.movies.movies}), {addMovie, deleteMovie, getAllMovies, setInputs})(Movies)



