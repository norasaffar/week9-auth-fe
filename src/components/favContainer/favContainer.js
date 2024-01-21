import React from 'react';
// import BookCard from '../bookCard/bookCard';
import './favContainer.css';
import {addFavBook} from "../../utils/fetch"



const FavContainer = ({ favBook, loggedIn,}) => {
    console.log(loggedIn)
    return (
    <div className="favContainer-wrapper">
     <div className='favContainer-inner'>
        <div className="favContainer-detail">
          <h4>{loggedIn.username} Favorite Book</h4>
            {favBook ? (
              <>
                <p>Title: {favBook.title}</p>
                <p>Author: {favBook.author}</p>
                <p>genre: {favBook.genre}</p>
              </>
            ) : (
                console.log("favcontainer")
            )}
          </div>
          <div className="favContainer-detail"></div>
          <h4>{loggedIn.username} Name </h4>
          <p>{loggedIn.email}</p>
           </div>
         {/* <button onClick={submitHandler}> Submit Handler</button> */}
       </div>
    );
  };
  
  export default FavContainer;