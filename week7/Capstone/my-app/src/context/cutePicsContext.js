import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class CatBookContextProvider extends Component {
  state = {
    booklist: [
        { 
          cover: "https://images.unsplash.com/photo-1584561775356-09cebd63d47a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
          title: "Cozy",
          description: "She is so cute!"
        },
  
        { 
          cover: "https://images.unsplash.com/photo-1597350289957-120f34437361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
          title: "A Cool Cat",
          description: "He likes the Hobbit!!"
        },
  
        { 
          cover: "https://images.unsplash.com/photo-1599488879763-bc34d1796448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
          title: "Best Combo",
          description: "Books and Cats!!!"
        }  
      ],
      
    cover: "",
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
        cover: this.state.cover, 
        title: this.state.title, 
        description: this.state.description
      }),
      cover: "",
      title: "",
      description: ""
    })
  }

  bookEdit=(index) => {
      console.log("edit", index)
      console.log(document.getElementById(index).children)
      var value1=(document.getElementById(index).children[4]).value
      var value2=(document.getElementById(index).children[5]).value
      var value3=(document.getElementById(index).children[6]).value
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

      <div> 
          <Provider
            value={{
                booklist: this.state.booklist,
                cover: this.state.cover,
                title: this.state.title, 
                description: this.state.description,
                handleChange: this.handleChange,
                booklistUpdate: this.booklistUpdate,
                bookEdit: this.bookEdit,
                bookDelete: this.bookDelete
                }}>
                {this.props.children}
          </Provider>
      </div>  

      
    )
}
}

export {CatBookContextProvider, Consumer as CatBookContextConsumer}