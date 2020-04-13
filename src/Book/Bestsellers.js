import React, { useState } from 'react';
import NYTBest from './nytimes';


const Bestsellers = ({bests, onClickBestsellers }) => {


  

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