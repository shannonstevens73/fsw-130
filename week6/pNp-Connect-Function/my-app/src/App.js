import React from "react"
import {connect} from "react-redux"
import {addContact, removeContact, setInputs} from "./redux"



function App(props) {    
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        console.log(props)
        props.setInputs(name, value)
        // setState({
        //     [name]: value
        // })
    }
    
    const onclickUpdate = (event) => {
      event.preventDefault()
      props.addContact()
    //   setState({
    //     contacts: []
    //   })
    }

    const onclickDelete = (event, index) => {
      event.preventDefault()
      props.removeContact(index)
    //   setState({
    //     contacts: []
    //   })
    }


    return (
        <div>
        <form>
            <input 
                id="input"
                type="text" 
                name="name"
                value={props.name}                  
                placeholder="name" 
                onChange={handleChange} 
            />
            <br />
            <h1>{props.name}</h1>
            <br />

            <input 
                id="input"
                type="text"                  
                name="phone"
                value={props.phone}
                placeholder="phone" 
                onChange={handleChange} 
            />
            <br />
            <h1>{props.phone}</h1>
            <br />

            <input 
                id="input"
                type="text" 
                name="email"
                value={props.email}                  
                placeholder="email" 
                onChange={handleChange} 
            />
            <br />
            <h1>{props.email}</h1>
            <br />
            <button id="button" onClick={onclickUpdate}>Submit</button> 
        </form>

        {props.contacts.map((contact, index) => 
        <div><p>{contact.name}</p><p>{contact.phone}</p><p>{contact.email}</p>
        <button id="button" onClick={(event) => onclickDelete (event, index) }>Delete</button>
        </div>
        )}



        </div>
    )
}

export default connect(state => ({contacts: state.contacts, name: state.name, phone: state.phone, email: state.email}), {addContact, removeContact, setInputs})(App)
