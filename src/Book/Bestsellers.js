import React, { useState } from 'react';
import NYTBest from './nytimes';


const Bestsellers = ({bests, onClickBestsellers }) => {

  const [bestlist, setBestList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isbns, setIsbns] = useState([]);
  

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