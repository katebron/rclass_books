import React from 'react';
import NYTBest from './nytimes';

function Bestsellers(){
  const bests = NYTBest.Bestsellers;
  console.log("this is bestsellers " + bests[1].title);
 // const bestTitles = bests.map((best, index ) => 
  //<li>{best.title}</li>);

   return (
       bests.map((best, idx)=>
       <li><img src={best.book_image}/><h2>{best.title}</h2><p>{best.description}</p></li>)
       
   )
      
    

} 


export { Bestsellers }