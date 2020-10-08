import React, { useState } from 'react'

function AddBookForm(props){
    const initInputs = { firstName: "", lastName: "", title: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add an Author</h3>            
            
            <input
                id="firstName"
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="author's first name"/>
                
            
            <input
                id="lastName"
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="author's last name"/>

            <br /><br />

            <input
                type="text"
                id="title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="title"
            />           

            <br /><br />

            <button>Add Book</button>
        </form>
    )

}

export default AddBookForm