import React, { useState } from 'react';


const Overdrive = ({book}) =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
myHeaders.append("Authorization", "Basic S0FURUJST05NQTpCelczMXVEUmNlTVRLbDZn");

var raw = "grant_type=client_credentials";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://oauth.overdrive.com/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    /*fetch(process.env.REACT_APP_OVERDRIVE_TOKEN_URL,{ method: 'POST',
	headers: {
        'Authorization': `Basic ${process.env.REACT_APP_OVERDRIVE_SECRET}`,
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    mode: 'cors',
    body: 'grant_type=client_credentials',
   }).then(function (data) {

	// Log the API data
	console.log('token', data);

   }).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

  });*/

   // console.log("this is isbns", isbns)
    return (
     <>Library stuff here</>  
    )
}



export {Overdrive}