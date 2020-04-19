import React, { useState } from 'react';
import NYTBest from './nytimes';


const Bestsellers = ({bests, onClickBestsellers, onClickMoreInfo}) => {


  

   return (
    bests.map((best, idx)=>
      <>
      <div className="best-item" >
        
       <button value={best.primary_isbn10} onClick={onClickMoreInfo}>
          <img src={best.book_image}  className="best-image" />
       </button>   
      </div>
       </>
       
   ))
      
    

} 


export { Bestsellers }