import React, {Component} from 'react'
import {BookContextConsumer} from './bookContext'


class App extends Component {

  state={
    booklist: [
      { 
        fullName: "John Tolkien",
        title: "The Lord of the Rings"
      },

      { 
        fullName: "Becky Eldredge",
        title: "The Inner Chapel"
      },

      { 
        fullName: "Drew Karpyshyn",
        title: "Rule of Two, Darth Bane 2"
      }  
    ],
    
    fullName: "",
    title: ""
  }

  handleChange=(event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({ 
      [name]: value
    })
  }

  booklistUpdate=(event) => {
    event.preventDefault()
    this.setState({
      booklist: this.state.booklist.concat(this.state.fullName, this.state.title)
    })
  }


  render() {
    return (
    
      <BookContextConsumer>
        {({fullName, currentAuthor}) => (
          <div>
          <form>
            <input 
            type = 'text'
            name = 'fullName'
            value = {this.state.fullName}
            onChange={this.handleChange}
            />

            <input 
            type = 'text'
            name = 'title'
            value = {this.state.title}
            onChange={this.handleChange}
            />
            <button onClick={(this.booklistUpdate)}>Submit</button>
          </form>
          <button onClick = {() => currentAuthor(this.state.fullName)}>Hi</button>
          <p>{fullName}</p>
          <ol>
            {this.state.booklist.map(bookInfo => <li key={bookInfo}>{bookInfo.fullName}{bookInfo.title}</li>)}
          </ol>
        
          {/* <p>{this.state.booklist[0].fullName}</p>
          <p>{this.state.booklist[0].title}</p> */}
          </div>
        )}
        {/* {form => (
          <AddBookForm />
        )} */}
        
        {/* {this.state.booklist.map(book => 
          <Book >{book}</Book>
        )}          */}
      </BookContextConsumer>
      
    
    )
  }
}

export default App