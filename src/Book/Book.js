import React, { useState } from 'react';
import { List } from './List'; 
import { Bestsellers } from './Bestsellers';
//import { SearchedList } from './SearchedList';
import { Overdrive } from './Overdrive';
import { MoreInfo } from './MoreInfo';
import {LibraryEbooks} from './LibraryEbooks';
import NYTBest from './nytimes';


const Book = () => {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [isbns, setIsbns] = useState([]);
    const [show, setShow] = useState(0);
    const [title, setTitle] = useState();
    const [overData, setOverData] = useState();
    const odToken = process.env.REACT_APP_TOKEN;
    

    const bests = NYTBest.Bestsellers;
    //const ebooks = minuteMan.Products;
    //console.log("ebooks", ebooks);
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
    const feature = (e)=>{
      let isbn = e.target.value;
      let gbook = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
      fetch(gbook)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoaded(true);
          setTitle(data.items[0].volumeInfo);
          searchOverdrive(data.items[0].volumeInfo.title)
        });
       
    }
    const searchOverdrive = (btitle) =>{
      const title = encodeURI(btitle);
      const overpath = 'https://cors-anywhere.herokuapp.com/https://api.overdrive.com/v1/collections/v1L1BnQAAAA2g/products?q=' + title + '&limit=5';
      console.log("overpath: ", overpath);
      const overdrive_headers = new Headers();
      overdrive_headers.append("Authorization", `bearer ${process.env.REACT_APP_TOKEN}`);
      const requestOptions = {
        method: 'GET',
        headers: overdrive_headers,
        redirect: 'follow'
      };
      fetch(overpath, requestOptions)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        setOverData(data.products)

      })
      .catch(error => console.error(error)
      );
    }
    const getNewOverDriveToken = (btitle) => {
      var odTokenHeaders = new Headers();
      odTokenHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      odTokenHeaders.append("Authorization", "Basic S0FURUJST05NQTpCelczMXVEUmNlTVRLbDZn");

      const tokenRaw = "grant_type=client_credentials";

      const tokenRequestOptions = {
        method: 'POST',
        headers: odTokenHeaders,
        body: tokenRaw,
        redirect: 'follow'
      };   
      fetch(process.env.REACT_APP_OVERDRIVE_TOKEN_URL, tokenRequestOptions)
      .then((response) => {
        return response.json();
      })
       .then((data) => {
        searchOverdrive(btitle, data.access_token)
      })
      .catch(error => console.log('error', error));
    }
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
           //console.log("traverse", data.items[0].volumeInfo)
            const newIsbn = [...isbns, {
              isbn: isbn,
              book_data: data.items[0].volumeInfo,
              show: true
            }]
            setIsbns(newIsbn);
            setShow(true);
          }
         
          
          
          
        })
    }
    
    
    return (
        <>
        {/*<label> Add Book club options </label>
        <input type="text" onKeyUp={ handleChange } />*/}
        { list && list.length > 0 ? <List list={list}/> : null }
        <div className="choose">
       
        <div className="best-sellers">
          <Bestsellers bests={bests} onClickMoreInfo={feature} onClickBestsellers={addToList}/>
          
        </div>
        
        </div>
        
        
        { title ?<div className="more-info"> <MoreInfo title={ title }/><div class="library-info">
          <h2>Related digital copies through Minuteman Library System</h2>
        {<Overdrive books={overData}/>}
        </div> </div>
          : null}
        
        {/*  isbns && isbns.length > 0 ? <div className="more-wrapper">*/}
        
          
          </>
    )
       
      
}

export {Book}