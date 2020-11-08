import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className="nav">
            <Link className="movieLink" to="/movies">Movies</Link>
            <Link className="tvLink" to="/tv">TV</Link>
        </div>
    )
}

export default Navbar