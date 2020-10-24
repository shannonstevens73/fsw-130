const redux = require("redux")

function addContact(name) {
    return {
        type: "ADD_CONTACT",
        payload: name
    }
}

function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        payload: id
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "REMOVE_CONTACT": 
            state.contacts.splice(action.payload, 1)
            return {
                ...state,
                contacts: state.contacts
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact
  ({
    name: "Tommy Oliver", 
    age: 25, 
    phone: "985-261-1234"
  }))

store.dispatch(addContact
  ({
    name: "John Doe", 
    age: 48, 
    phone: "225-665-9876"
  }))

  store.dispatch(removeContact(0))