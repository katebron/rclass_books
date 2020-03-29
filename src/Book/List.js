import React, { useState } from 'react';


function List(props){
   const bookList = props.list;
   
           
    return (
        <>
        <ul>
          {bookList.map((book, index) => (
              <li key={`${book.name}${index}`}>{ book.name }</li>    
            ))
          }   
        </ul>   
       </>
    )
}



export {List}