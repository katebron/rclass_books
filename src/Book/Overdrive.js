import React from 'react';
import { Availability } from './Availability';


const Overdrive = ({books}) =>{
   if (books){
       return(books.map((b, idx)=>
          <>
            <div className="book-item" key={b.crossRefID}>
            <h3>{b.title}</h3> 
            {b.primaryCreator.name}<br/>
            {b.mediaType}<br/>
            <Availability id={b.id} />
            </div>
           </>
        ))
   }
   else{
       return (<p>Loading library data...</p>)
   }

} 
export {Overdrive}