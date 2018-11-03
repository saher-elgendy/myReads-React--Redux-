import { FETCH_BOOKS } from './Types'
import BooksAPI from '../BooksAPI'

const fetchBooks = ()=> dispatch => {
  BooksAPI.getAll().then(res => res.json()).then(books => dispatch({
  	type: FETCH_BOOKS,
  	payload: books
  }));
}