import React, { Component } from 'react';
import { connect } from 'react-redux'
import BookShelf from './components/BookShelf'
import AllShelves from './components/AllShelves'
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {  

  componentDidMount() {
  	this.props.fetchBooks();
  }

  render() {
  	console.log(this.props.books)
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={AllShelves} />         
        <Route  path="/search" component={SearchPage} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
	return {
	  books: state.books
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	fetchBooks: () => {
       BooksAPI.getAll().then(books => dispatch({
         type: 'FETCH_BOOKS',
         payload: books
       }));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
