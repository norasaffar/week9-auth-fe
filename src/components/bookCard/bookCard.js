import React from 'react';
import "./bookCard.css";
import {addFavBook} from "../../utils/fetch"

const BookCard = ({ book, loggedIn, setFavBook}) => {
    const sumbitHandler = async(e, book, loggedIn) => {
      e.preventDefault();
      console.log("bookid", book.id)
      console.log("username", loggedIn.username);
      const data = await addFavBook(book.id, loggedIn.username);
   };

   
  return (
    <div className='book-card-wrapper'>
      <div className='book-card-inner'>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <button onClick={(e) => sumbitHandler(e,book, loggedIn, setFavBook)}>Add to Fav</button>
      </div>
    </div>
  );
}

export default BookCard;

