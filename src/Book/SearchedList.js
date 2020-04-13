import React, { useState } from 'react';


const SearchedList = ({isbns}) =>{
    console.log("this is isbns", isbns)
    return (
        isbns.map((isbn, idx)=>
        <div className="more-book">
        <h2>{isbn.book_data.title} </h2>
        <em>{ isbn.book_data.description }</em>
        <p>Page count: { isbn.book_data.pageCount } </p> 
       </div>
    ))
}



export {SearchedList}