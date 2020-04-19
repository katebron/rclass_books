import React, { useState } from 'react';


const Overdrive = ({books}) =>{
    /*const title = encodeURI(book.title);
    const book_result = [];
    const path = 'https://cors-anywhere.herokuapp.com/https://api.overdrive.com/v1/collections/v1L1BnQAAAA2g/products?q=' + title + '&limit=10';
    console.log("encoded title " + path);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAEAAHuJF9RFae-TYgQWC0u4wINUySRKTnta0JCOf7X1k5_TsvEMZ6cdrb-TwHw4Pl15b37VYf4HO6kL6-LZJZaDVCtCP7WudGh4eEVNhdAaHKVQ8GS1hUDnoZJ67R-LxhJF0wZuDA2uZA2uLVxAxkgYinq6N51J8jr1oyDfN1WYYDy6b_diPB-IKH5THM5qanAtDsoowHG0FjDxmOR3qetG6ughHF0CYBPNgP4yLlXL1wYXmhf3Rs9MW3yM8rSrs7naO7BOL_Ro1SC3R0tqj_43q7Xd1vjy5sYM2IRRlYMNfQdt5Jl7LT7crljfML97nuaPi9FTUR3k65vdKT3-tVHLEzOEAQAAAAEAAABukIXdd3SjHUh4LBwNzgyXkFaGugp2NdKT6PASjltyqxyzFNcIlbdzZSXqz_OipJHAHB04TthI9rp-NQX6YfShlnFxHDunCUNr_3fadhZYUGQVyItDRzFaD-gOd1YjM_V3srj0_J6Q6rMXD-hO_sVvSFWJ2TGM7Oa7sM2yISBxEbjJcp6bgqUkhrVeogE6_aGu1ox8zywEh821cuYn7w9tmfR8WSPsWXaTN4-dzaTnQyZN-ftoBGJSEuO5hklnY92_PTN_8e99TtAempjKBw0M2hMWIHxwfeMCqsIWDnTz8MsdjKXehluIYCSJb5Ef0W1HbxBx9wiZCUCryeM6F0gFAtfHaqP9HOoR9PGUP5pV0MZ3FoC6rrK433v9S6pGcbQggtoRmKUzh-lzsS9MyEadhO91CZP3w-jUOwMhdQUJLk5V6wOM9q5k8wD8CFLG0D29t0sf_4Ck5UDS1wlB-TsJYVWb1A1OX2mEJ_pTrcKfXtSSdQTPeuzW-l_YopOKEA");
    
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(path, requestOptions)
     .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("this is overdrive", data);
        book_result.push(data);
       // setBookInfo(data.items[0].volumeInfo);
      })
      .catch(error => console.log('error', error));
      



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
           {b.title}
         {b.crossRefId}
        
       </div>
        </>)
     
   )
   }
   else{
       return (<p>Loading library data...</p>)
   }
   
    
      
    

} 
export {Overdrive}