import React, {Component} from 'react'
import {BookContextConsumer} from './uglyContext'


class App extends Component {

  
  render() {
    return (
    
      <BookContextConsumer>
        {({cover, title, description, comment, bookEdit, booklist, handleChange, booklistUpdate, bookDelete}) => (
          <div>
          <form id="form">

                <h3>Ugly Book Covers</h3>
              
                <input 
                type = 'text'
                name = 'cover'
                className = "inputs"
                value = {cover}
                placeholder = "url"
                onChange={handleChange}
                />
             

              
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
                
              <img src={bookInfo.cover} alt="" />

              <br />
              
              <strong>{bookInfo.title}</strong>

              <br />

              <p>{bookInfo.description}</p>

              <input 
                type = 'text'
                name = 'cover'
                // value = {cover}
                placeholder = "url"
                // onChange={handleChange}
                />

              <input 
                type = 'text'
                name = 'title'
                // value = {title}
                placeholder = "book title"
                // onChange={handleChange}
              />

              <input 
                type = 'text'
                name = 'description'
                // value = {description}
                placeholder = "description"
                // onChange={handleChange}
              />

              <br /><br />

              <button id={index} onClick={(e) => bookEdit(e.target.id)}>Edit</button>

              <button id={index} onClick={(e) => bookDelete(e.target.id)}>Delete</button>              

              <br /><br />

              <textarea
                id="comment"
                name="comment"
                value={bookInfo.comment}
                onChange={handleChange}
                placeholder="tell us what you think..."
                rows="4"
                cols="50"
              ></textarea>

              <p>{bookInfo.comment}</p>

              <hr />         
              
              </li>)}              
          </ol>
          
          </div>
        )}       
      </BookContextConsumer>
      
    
    )
  }
}

export default App