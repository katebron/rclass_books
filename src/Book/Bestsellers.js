import React from 'react';


const Bestsellers = ({bests, onClickBestsellers, onClickMoreInfo}) => {


  

   return (
    bests.map((best, idx)=>
      <>
      <div className="best-item" key={best.primary_isbn10} >
        
       <button value={best.primary_isbn10} onClick={onClickMoreInfo}>
          <img src={best.book_image}  alt={best.title} className="best-image" />
       </button>   
      </div>
       </>
       
   ))
      
    

} 


export { Bestsellers }