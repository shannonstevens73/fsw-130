import React  from 'react'

function Book(props) {
    const { fullName, title } = props
    return (
        <div className="book"> 
            fullName={fullName}
            title={title}                
              
            
        </div>
    )
}


export default Book