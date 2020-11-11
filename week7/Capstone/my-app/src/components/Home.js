import React from 'react'

function Home() {
    return (
        <div>

            <img id="homeIMG" src="https://images.unsplash.com/photo-1598251305190-2084e095f2c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="" />

            <div className="aboutText">        

                <h2 className="header">
                    Welcome to My Books and Cats Website
                </h2>

                <p id="homeP">
                    On the <strong>Favorite Books</strong> Page you will find some of my favorite books, and a form for you to enter some of yours!
                    <br /><br />
                    On the <strong>Books and Cat Pics</strong> Page you will find what I think is the best combo: books and cats. I have loaded some pics that I think you will love!! Add your favorite pics!!
                </p>

            </div>

            

        </div>
    )
}

export default Home