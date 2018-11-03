import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfChanger extends Component {
  render() {
  	const {getBook, id, books, foundBooks, book} = this.props;

  	return(
      <div className="shelf-changer">
        <div className="select-shelf">
         <select 
           onChange={e => getBook(e.target.value, book)}
           value={book.shelf}
         >   
           <option value="none">none</option>
           <option value="currentlyReading">currently reading</option>
           <option value="wantToRead">want to read</option>
           <option value="read">read</option>
         </select>
        </div>
      </div>
  	);
  }
}

const mapStateToProps = (state) =>{
	return {
	  books: state.books,
	  foundBooks: state.foundBooks
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	getBook: (shelf, book) => dispatch({
  	  type: 'GET_BOOK',
  	  shelf,
      book
  	})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfChanger);