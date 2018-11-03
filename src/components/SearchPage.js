import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'
import { connect } from 'react-redux';

class SearchPage extends Component {

  componentDidUpdate = (prevProps) => {
    const {searchBooks, query, foundBooks} = this.props
    if((prevProps.query !== query)) {
      searchBooks(query);
    }
  }
 
  render() {
    const { query, foundBooks, setQuery, searchBooks, books } = this.props;

    console.log(foundBooks)
    return(
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="search Books" 
          //ref={node => this.input = node}
          onChange={e => {
            //const { value } = this.input;
            setQuery(e.target.value);
            //searchBooks(e.target.value)
          }}/>
      
        <div className="books-grid">
          <ul className="found-books-list">
            { foundBooks.length ? foundBooks.map(book => (
              <li key={book.id} className="found-book">   
                <Book  book={book} />
              </li>             
            )): <div className="no-match-msg"><p>No books found</p></div> }
          </ul>
       </div>
     </div>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    query: state.query.trim(),
    foundBooks: state.foundBooks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: query =>  dispatch({
        type: 'CHANGE_QUERY',
        query
      }), 

    searchBooks: query => {
      BooksAPI.search(query, 20).then(result => {
        dispatch({
          type: 'SEARCH_BOOKS',
          foundBooks: result ? result : []
        });
      })
    }
  }          
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

