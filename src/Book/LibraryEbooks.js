import React, { useState } from 'react';
import minuteMan from './minuteManEbooks'


const LibraryEbooks = () => {
  const minuteManBooks = minuteMan.Products;
  console.log("mm", minuteManBooks);
  

   return (
   minuteManBooks.map((book, idx)=>
      <>
      <div className="best-item" >
        
       <p>
          title = {book.title}
          id = {book.id}, 
          </p>
          <img src={book.images.cover.href} className="best-image" />
      
      </div>
       </>
       
   ))
      
    

} 


export { LibraryEbooks }