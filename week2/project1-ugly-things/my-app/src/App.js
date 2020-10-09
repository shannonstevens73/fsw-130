import React, {Component} from 'react'
import {BookContextConsumer} from './bookContext'


class App extends Component {

  
  render() {
    return (
    
      <BookContextConsumer>
        {({fullName, title, bookEdit, booklist, handleChange, booklistUpdate, bookDelete}) => (
          <div>
          <form id="form">
            <input 
            type = 'text'
            name = 'fullName'
            className = "inputs"
            value = {fullName}
            placeholder = "Author Name"
            onChange={handleChange}
            />

            <input 
            type = 'text'
            name = 'title'
            className = "inputs"
            value = {title}
            placeholder = "Book Title"
            onChange={handleChange}
            />

            <br /><br />

            <button id="submitButton" onClick={(booklistUpdate)}>Submit</button>
          </form>

          <ol>
            {booklist.map((bookInfo, index) => <li id={index} key={bookInfo}>
              
            <strong>Author: </strong>{bookInfo.fullName} 
            
            <strong>Title: </strong>{bookInfo.title}

            <button id={index} onClick={(e) => bookEdit(e.target.id)}>Edit</button>
            <button id={index} onClick={(e) => bookDelete(e.target.id)}>Delete</button>

            <input 
            type = 'text'
            name = 'fullName'
            className = "inputs"
            // value = {fullName}
            placeholder = "Author Name"
            // onChange={handleChange}
            />

            <input 
            type = 'text'
            name = 'title'
            className = "inputs"
            // value = {title}
            placeholder = "Book Title"
            // onChange={handleChange}
            />
            
            </li>)}
          </ol>
          
          </div>
        )}       
      </BookContextConsumer>
      
    
    )
  }
}

export default App
