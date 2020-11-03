import React from "react"
import {connect} from "react-redux"
import {addContact, removeContact, setInputs} from "./redux"



function App(props) {    
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        console.log(props)
        props.setInputs(name, value)
    }
    
    const onclickUpdate = (event) => {
      event.preventDefault()
      props.addContact()
    }

    const onclickDelete = (event, index) => {
      event.preventDefault()
      props.removeContact(index)
    }


    return (
        <div>
            <form id="myform">
            <h2>My Contact List</h2>

                <input 
                    id="input"
                    type="text" 
                    name="name"
                    value={props.name}                  
                    placeholder="name" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.name}</p>
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
                <p>{props.phone}</p>
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
                <p>{props.email}</p>
                <br />
                <button id="submitButton" onClick={onclickUpdate}>Submit</button> 
            </form>            

            {props.contacts.map((contact, index) => 
            <div id="contacts">
                
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>

                <button id="deleteButton" onClick={(event) => onclickDelete (event, index) }>Delete</button>
            </div>
            )}



        </div>
    )
}

export default connect(state => ({contacts: state.contacts, name: state.name, phone: state.phone, email: state.email}), {addContact, removeContact, setInputs})(App)