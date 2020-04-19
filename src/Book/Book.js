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
      console.log("feature isbn", e);
      let gbook = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
      fetch(gbook)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoaded(true);
          console.log("this is feature", data);
          setTitle(data.items[0].volumeInfo);
          searchOverdrive(data.items[0].volumeInfo.title)
        });
       
    }
    const searchOverdrive = (btitle) =>{
      console.log("name", btitle)
      const title = encodeURI(btitle);
      const overpath = 'https://cors-anywhere.herokuapp.com/https://api.overdrive.com/v1/collections/v1L1BnQAAAA2g/products?q=' + title + '&limit=10';
      console.log("path: "+ overpath);
      const overdrive_headers = new Headers();
    overdrive_headers.append("Authorization", "Bearer AAEAAIQ4wHTxnMcRMyXbGwDU3gfsKWHnEv0Y7Mv-iSWXY7NpXOogi4kHdoBpmjuU8D0BNNV_AxYm5xFjZb5kNeIAzRDNGGl6LG_cugvUm381CNfURMfgvx8yKISrUVixPnQJx0dTTViuENvAPKYqeWWufjDUVZI-PeZk4c9kY4YFM8oqwevaNxfUH_0THu3ZkFk23DRGM2C5iGGRScf569rhmrXnryqXA4rnZK5Myh4xwECHc9_lZcLpLbjElIucbaUJszFf8tdmkQ9I2KsX_i-0Oaz1NLjQmKWvVUGdVAYRJrbcemZDUEaNwBAkudJSCMg34eKxIV9KdOkQ5QXB8NL4tlyEAQAAAAEAABTFDKdI28XKBYW4PZBX-0t_TWdATrB-UcqM3dPqG_eqXzCgwYQhagbzyHpdoKkv29Nfn4bWf_oTJnk62trT-0ji_B7gv2YbqwanuTUuHg-Vmcl7jzVKxsCP3HhJBaBoP3zDqy72RUQEqZt_1LgFNwIs2BEQ1Hli1FDs0KaozCl2c30TLmJUEoGSH5LVpaOMGRhtRzIMw2Esc8K6tHf6GfulvNRnJhq9ZU0KqVhLSAEQhHiRFgvcFxKRnX4ouSYePZtht6P63pb0MZYHCg-86fZpJuaoxj0Mm-Ve5d0oyiugZ8pGxyg8YH43wA3PCQrXv087L6JVg8jrEPwy-DgPLr3-ZFdrNBg_MZCCl3mUv4A4ZdZZ8aZWHHTjJ9Dqk1WkDUoXnL1xbjIExmjzYjz-bozT7JmHnbMq0z3EWX1FM1p6mNJ77Ht3Ev083c_PxGz4aQ1jJuhlAegfawRxRxfCm55sLPfoo0VmPpCQ-YYA1w_fP4RhE1Sl2HTiVwsFZspbiA");
    
    const requestOptions = {
      method: 'GET',
      headers: overdrive_headers,
      redirect: 'follow'
    };
      fetch(overpath, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("this is overdrive", data.products);
        setOverData(data.products)

      })
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
        Choose a year for bestsellers:
        <input type="text" value=""></input>
        <div className="best-sellers">
          <Bestsellers bests={bests} onClickMoreInfo={feature} onClickBestsellers={addToList}/>
          
        </div>
        
        </div>
        
        
        { title ?<div className="more-info"> <MoreInfo title={ title }/><div class="library-info">
        {<Overdrive books={overData}/>}
        </div> </div>
          : null}
        
        {/*  isbns && isbns.length > 0 ? <div className="more-wrapper">*/}
        
          
          </>
    )
       
      
}

export {Book}