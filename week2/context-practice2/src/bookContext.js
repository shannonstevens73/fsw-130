import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class BookContextProvider extends Component {
    state = {
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
          booklist: this.state.booklist.concat({fullName: this.state.fullName, title: this.state.title}),
          fullName: "",
          title: ""
        })
      } 


    render() {
        return (
            <Provider            
                value={{
                    booklist: this.state.booklist,
                    fullName: this.state.fullName,
                    title: this.state.title, 
                    handleChange: this.handleChange,
                    booklistUpdate: this.booklistUpdate
                }}>
                    {this.props.children}
            </Provider>
        )
    }
}

export {BookContextProvider, Consumer as BookContextConsumer}