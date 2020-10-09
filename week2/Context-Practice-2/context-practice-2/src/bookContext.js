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
          booklist: this.state.booklist.concat({fullName: this.state.fullName, title: this.state.title})
        })
      }

      bookEdit=(index) => {
          console.log("edit", index)
          console.log(document.getElementById(index).children)
          var value1=(document.getElementById(index).children[3]).value
          var value2=(document.getElementById(index).children[4]).value
          var array=this.state.booklist
          Object.assign(array[index], {fullName: value1, title: value2})
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
                    fullName: this.state.fullName,
                    title: this.state.title, 
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