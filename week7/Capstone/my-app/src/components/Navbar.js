import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className="nav">
            <Link to ="/">Home</Link>
            <Link to ="/FavoriteBooks">Favorite Books</Link>
            <Link to ="/BooksAndCats">Books and Cat Pics</Link>
        </div>
    )
}

export default Navbar