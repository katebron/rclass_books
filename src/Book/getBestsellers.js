import React, { useState } from 'react';
import NYTBest from './nytimes';


const Bestsellers = ({bests, onClickBestsellers }) => {

   https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=2015-10-01&api-key=gbOrJ1QRzrMeFQAfUYe01NcSnIA7OYsk


   return (
    bests.map((best, idx)=>
      <>
      
       <p >{best.title}</p>
       <button value={best.primary_isbn10} onClick={onClickBestsellers}>
	      	More about {best.title}
	      </button>
       </>
       
   ))
      
    

} 


export { Bestsellers }