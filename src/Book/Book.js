import React, { useState } from 'react';
import { List } from './List'; 
import { Bestsellers } from './Bestsellers';

function Book(){
    const [list, setList] = useState([]);

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
        { list && list.length > 0 ? <List list={list}/> : null }
   
        <div className="best-sellers">
          <Bestsellers />
        </div>
        
          </>
    )
       
        
    
}

export {Book}