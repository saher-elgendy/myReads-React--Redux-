import React, { Component } from 'react';
import Book from './Book'
import { connect } from 'react-redux';


const BookShelf = (props) => {
  console.log(props.books)
  return(
     <div className="book-shelf">
        {props.books.map(book => (
	        <Book 
	          key={book.id}
	          book={book}
	        />
	     ))}
     </div>
  );
}

const mapStateToProps  = (state, ownProps) => {
  return {
    books: state.books.filter(book => book.shelf === ownProps.shelfName)
  }
}

export default connect(mapStateToProps, null)(BookShelf);


