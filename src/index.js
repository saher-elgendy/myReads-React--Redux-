import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as BooksAPI from './BooksAPI';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import booksReducer from './reducers/BookReducer';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

const middleware = [thunk];

const store = createStore(booksReducer, applyMiddleware(...middleware));
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>   
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
