import React from 'react'
import BookCard from '../bookCard/bookCard'
import "./BooksContainer.css";

const BooksContainer = ({ allBooks, loggedIn, setFavBook }) => {
  return (
    <div className='books-container-wrapper'>
        <div className='book-container-inner'></div>
        {allBooks.map ((book, key) => (
            <div className = "bookcard">
              <BookCard book={book} loggedIn={loggedIn} />
            </div>
        ))}
    </div>
  )
}

export default BooksContainer;