import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className="nav">
            <Link to="/movies">Movies</Link>
            <Link to="/tv">TV</Link>
        </div>
    )
}

export default Navbar