import React from 'react';
import ShelfChanger from './shelfChanger'
import {connect } from 'react-redux';

const Book = (props) => {
  const { book } = props;
  
  return (
   <div className="book">
    <div
      className="book-image-cont"
      style={{
	     backgroundImage: `url(${book.imageLinks.thumbnail})`
	   }}
    >
    <ShelfChanger book={book}/>
    </div>
    <p>{book.title}</p>
   </div>
  );
}

export default Book;