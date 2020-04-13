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
    /*const handleChange = (e) => {
        //const bookList = [...list, setList];
        if(e.key === 'Enter') {
          const val = e.target.value;
    
            const newBook = [...list, {
                name: val
            }]
           
            setList(newBook);
       
          
        }  
    }*/
    const addToList = (e) => {
      let isbn = e.target.value;
      let gbook_info = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
      fetch(gbook_info) 
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoaded(true);
          if (data.items[0]){
           // data = data.items[0];
           console.log("traverse", data.items[0].volumeInfo)
            const newIsbn = [...isbns, {
              isbn: isbn,
              book_data: data.items[0].volumeInfo
            }]
            setIsbns(newIsbn);
          }
         
          
          
          
        })
  
      

    
    }
    
    return (
        <>
        {/*<label> Add Book club options </label>
        <input type="text" onKeyUp={ handleChange } />*/}
        { list && list.length > 0 ? <List list={list}/> : null }
   
        <div className="best-sellers">
          <Bestsellers bests={bests} onClickBestsellers={addToList} />
        </div>
       
        {  isbns && isbns.length > 0 ? <div className="more-wrapper"><SearchedList isbns={isbns}/> </div>: null }
          </>
    )
       
      
}

export {Book}