import React from "react"
import {connect} from "react-redux"
import {addTVShows, deleteTVShows, getAllTVShows, setInputs} from "../redux/tvShows.js"

function TV(props) {    
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        props.setInputs(name, value)
    }
    
    const onclickUpdate = (event) => {
      event.preventDefault()
      props.addTVShows()
    }

    const onclickDelete = (event, index) => {
      event.preventDefault()
      props.deleteTVShows(index)
    }


    return (
        <div>

            <form>
            <h2>My TV List</h2>

                <input 
                    type="text" 
                    name="show"
                    value={props.show}                  
                    placeholder="show" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.show}</p>
                <br />

                <button id="submitButton" onClick={onclickUpdate}>Submit</button> 
            </form>            
            {console.log(props, "TV.js component")}
            {props.tvShows.map((tvShows, index) => 
            <div key={index}>
                
                <p>{tvShows}</p>

                <button id="deleteButton" onClick={(event) => onclickDelete (event, index) }>Delete</button>
            </div>
            )}
        </div>
    )
}

export default connect(state => ({...state.tvShows, tvShows: state.tvShows.tvShows}), {addTVShows, deleteTVShows, getAllTVShows, setInputs})(TV)
