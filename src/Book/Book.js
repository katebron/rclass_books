import React, { useState } from 'react';
import { List } from './List'; 

function Book(){
    const [list, setList] = useState([
        {name: "belarus"}
    ]);

    const handleChange = (e) => {
        //const bookList = [...list, setList];
        if(e.key === 'Enter') {
          const val = e.target.value;
          const newBook = [...list, {
              name: val
          }]
         
          setList(newBook);
        }  
    }
    
    return (
        <>
        <label> Add Book club options </label>
        <input type="text" onKeyUp={ handleChange } />
         <List list={ list }/>
          </>
    )
       
        
    
}

export {Book}