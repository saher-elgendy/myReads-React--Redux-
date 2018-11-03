import { combineReducers } from  'redux';
import booksReducer from './BookReducer';
import getQuery from './getQuery';

const rootReducer = combineReducers({booksReducer, getQuery});

export default rootReducer;