import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class BookContextProvider extends Component {
    state = {
        booklist: [
            { 
              cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309646366l/11510668.jpg",
              title: "Beautiful Disaster",
              description: "Her tongue!",
              comment: ""
            },
      
            { 
              cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1287676804l/8428110.jpg",
              title: "Through Her Eyes",
              description: "She looks like a ghost...",
              comment: ""
            },
      
            { 
              cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348686699l/7356236.jpg",
              title: "I Capture the Castle",
              description: "An eyeball with a castle reflecting in it; why?",
              comment: ""
            }  
          ],
          
        cover: "",
        title: "",
        description: "",
        comment: ""
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
            cover: this.state.cover, 
            title: this.state.title, 
            description: this.state.description,
            comment: this.state.comment
          }),
          cover: "",
          title: "",
          description: ""
        })
      }

      bookEdit=(index) => {
          console.log("edit", index)
          console.log(document.getElementById(index).children)
          var value1=(document.getElementById(index).children[5]).value
          var value2=(document.getElementById(index).children[6]).value
          var value3=(document.getElementById(index).children[7]).value
          var array=this.state.booklist
          Object.assign(array[index], {cover: value1, title: value2, description: value3})
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
                    cover: this.state.cover,
                    title: this.state.title, 
                    description: this.state.description,
                    comment: this.state.comment,
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