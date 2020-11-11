import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class BookContextProvider extends Component {
    state = {
        booklist: [
            { 
              title: "The Lord of the Rings",
              description: "The best nonfiction book of all time!"
            },
      
            { 
              title: "Dracula",
              description: "Gothic and scary book"
            },
      
            { 
              title: "Clockwork Prince",
              description: "The book I'm currently reading..."
            }  
          ],          
        
          title: "",
          description: ""
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
            booklist: this.state.booklist.concat
            ({
              title: this.state.title, 
              description: this.state.description
            }),
            
            title: "",
            description: ""
          })
        }
  
        bookEdit=(index) => {
            console.log("edit", index)
            console.log(document.getElementById(index).children)
            var value1=(document.getElementById(index).children[2]).value
            var value2=(document.getElementById(index).children[3]).value
            var array=this.state.booklist
            Object.assign(array[index], {title: value1, description: value2})
            console.log(array)
            this.setState({booklist: array})
        }
  
        bookDelete=(index) => {
            console.log("edit", index)
            console.log(document.getElementById(index))
            var array=this.state.booklist
            array.splice(index, 1)
            console.log(array)
            this.setState({booklist: array})
        }  
  
  
      render() {
          return (
              <Provider            
                  value={{
                      booklist: this.state.booklist,
                      title: this.state.title, 
                      description: this.state.description,
                      handleChange: this.handleChange,
                      booklistUpdate: this.booklistUpdate,
                      bookEdit: this.bookEdit,
                      bookDelete: this.bookDelete
                  }}>
                      {this.props.children}
              </Provider>
          )
      }
  }

export {BookContextProvider, Consumer as BookContextConsumer}