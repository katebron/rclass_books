import React, { useState } from 'react';
import { Availability } from './Availability';


const Overdrive = ({books}) =>{
    const [availData, setAvailData] = useState();
    const checkAvailability = (e) => {
        const id = e.target.value;
        const path = 'https://cors-anywhere.herokuapp.com/https://api.overdrive.com/v1/collections/v1L1BnQAAAA2g/products/' + id + '/availability';
        console.log("encoded title " + path);
        const availHeaders = new Headers();
        availHeaders.append("Authorization", `bearer ${process.env.REACT_APP_TOKEN}`);
        
        const requestOptions = {
          method: 'GET',
          headers: availHeaders,
          redirect: 'follow'
        };
        
        fetch(path, requestOptions)
         .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("this is availability", data);
           setAvailData(data);
          })
          .catch(error => console.log('error', error));
          
    }
    



//// get token ///
/*

  */
 //const products = {book.products}
 //console.log("products", books);
   // return(<p>Here Here</p>)
   if (books){
       
       return(books.map((b, idx)=>
       <>
       
       <div className="book-item" >
          <h3>{b.title}</h3> 
          {b.primaryCreator.name}<br/>
         {b.mediaType}<br/>
         {b.id}
         <Availability  id={b.id} info={availData} onClickAvailability={checkAvailability} />
         

        
       </div>
        </>)
     
   )
   }
   else{
       return (<p>Loading library data...</p>)
   }
   
    
      
    

} 
export {Overdrive}