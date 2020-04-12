import React, { useState } from 'react';
import { List } from './List'; 
import { Bestsellers } from './Bestsellers';
import { SearchedList } from './SearchedList';
import NYTBest from './nytimes';

const Book = () => {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [isbns, setIsbns] = useState([]);
    const bests = NYTBest.Bestsellers;
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
    const addToList = (e) => {
      
      const isbn = e.target.value;
      const newIsbn = [...isbns, {
        isbn: isbn
      }]
      const gbook_info = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
      const book_data = fetch(gbook_info) 
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoaded(true);
          setItems(data.items);
        })
  
      
      setIsbns(newIsbn);
    
    }
    
    return (
        <>
        <label> Add Book club options </label>
        {/*<input type="text" onKeyUp={ handleChange } />*/}
        { list && list.length > 0 ? <List list={list}/> : null }
   
        <div className="best-sellers">

    
            
              
              
              <Bestsellers bests={bests} onClickBestsellers={addToList} />
             
             
     
   
        </div>
        { isbns && isbns.length > 0 ? <SearchedList isbns={isbns}/> : null }
          </>
    )
       
        
    
}

export {Book}