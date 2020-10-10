import React, {Component} from "react"
import {BookContextConsumer} from "./bookContext"


class App extends Component {

  
  render() {
    return (
    
      <BookContextConsumer>
        {({fullName, title, booklist, handleChange, booklistUpdate}) => (
          <div>
              <form id="form">

             
                  <div>
                    <input 
                        type = "text"
                        name = "fullName"
                        className = "inputs"
                        value = {fullName}
                        placeholder = "Author Name"
                        onChange={handleChange}
                    />
                  </div>

                  <div>
                      <input 
                          type = "text"
                          name = "title"
                          className = "inputs"
                          value = {title}
                          placeholder = "Book Title"
                           onChange={handleChange}
                      />

                      <button id="submitButton" onClick={(booklistUpdate)}>Submit</button>
                    </div>  

                    <br /><br />

                    <div>
                      <ol>
                          {booklist.map((bookInfo, index) => <li id={index} key={bookInfo}>
                          
                            <div id="author">
                              <strong>Author: </strong>{bookInfo.fullName} 
                            </div>                          

                            <div id="title">
                              <strong>Title: </strong>{bookInfo.title}                    
                            </div>

                            <br /><br />                           

                          </li>)}
                      </ol>
                  </div>
                  
              </form>
          
          </div>
        )}       
      </BookContextConsumer>
      
    
    )
  }
}

export default App