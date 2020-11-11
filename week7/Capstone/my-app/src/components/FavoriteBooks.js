import React, {Component} from 'react'
import {BookContextConsumer} from '../context/bookContext'


class FavoriteBooks extends Component {

  
  render() {
    return (
    
      <BookContextConsumer>
              {({title, description, bookEdit, booklist, handleChange, booklistUpdate, bookDelete}) => (
          <div>
          <form id="form">

                <h3>Cute Book and Cat Pics</h3>
              
                <input 
                type = 'text'
                name = 'title'
                className = "inputs"
                value = {title}
                placeholder = "book title"
                onChange={handleChange}
                />             

             
                <input 
                type = 'text'
                name = 'description'
                className = "inputs"
                value = {description}
                placeholder = "description"
                onChange={handleChange}
                /> 

                
               <br /><br />
                <button id="submitButton" onClick={(booklistUpdate)}>Submit</button>
               

          </form>

          <ol>
              {booklist.map((bookInfo, index) => <li id={index} key={index}>
                
              
              <strong>{bookInfo.title}</strong>

              <p>{bookInfo.description}</p>
              
              <input 
                type = 'text'
                name = 'title'
                placeholder = "book title"
              />

              <input 
                type = 'text'
                name = 'description'
                placeholder = "description"
              />

              <br /><br />

              <button id={index} onClick={(e) => bookEdit(e.target.id)}>Edit</button>

              <button id={index} onClick={(e) => bookDelete(e.target.id)}>Delete</button>              

              <br /><br />

              <hr />         
              
              </li>)}              
          </ol>
          
          </div>
        )}      
      </BookContextConsumer>
      
    
    )
  }
}

export default FavoriteBooks