


const initialState = {
  books: [],
  query: '',
  foundBooks: []
}
 const bookReducer = (state = initialState, action) => {
   switch(action.type) {
  	 case 'FETCH_BOOKS':
       return {
         ...state,   
         books: action.payload,
       }

     case 'CHANGE_QUERY':
       return {
         ...state,
         query: action.query
       }

     case 'SEARCH_BOOKS':
       return {
         ...state,
         foundBooks: action.foundBooks.filter(book => book.imageLinks)
       }

    case 'GET_BOOK':
       return {
         ...state,       
         //when change a book shelf in search page, 
         //remove the book if exist then concat it again with the new shelf
         books: state.books.filter(book => book.id !== action.book.id).concat({...action.book, shelf: action.shelf}),
         
       }

     default: 
  	   return state;
   }
}

export default bookReducer;
