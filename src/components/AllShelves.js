  import React, {Component} from 'react';
  import BookShelf from './BookShelf';
  import { Link } from 'react-router-dom';

  const AllShelves = () => {

  const shelves = [
  {
    title: 'Currently Reading',
    shelfName: 'currentlyReading'
  },
  {
    title: 'Want to read',
    shelfName: 'wantToRead'
  }, 
  {
    title:'Read',
    shelfName: 'read'
  }
  ];

  return(
  <div>
   {shelves.map((shelf, index) => {
     return (
       <div className="shelf" key={index}>
         <h2>{shelf.title}</h2>
         <BookShelf shelfName={shelf.shelfName} />
         <div className="open-search">
           <Link to="/search" />
         </div>
       </div>
     );
   })}
  </div>
  );
  } 

  export default AllShelves;