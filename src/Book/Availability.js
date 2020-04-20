import React, { useState } from 'react';

const Availability = ({id}) => {
    const [availData, setAvailData] = useState();
    
    const checkAvailability = () => {
        const path = 'https://cors-anywhere.herokuapp.com/https://api.overdrive.com/v1/collections/v1L1BnQAAAA2g/products/' + id + '/availability';
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
            setAvailData(data.collections[0]);
           })
          .catch(error => console.log('error', error));
          
    }
    
       
    
            return(
                <>
                
                { availData? 
                <div className="minuteman-availability" key={id}><p>Minuteman Library availability info:</p>
                  <ul>
                   <li>Copies owned: { availData.copiesOwned }</li> 
                   <li>Available: { availData.copiesAvailable }</li>
                   <li>Number of Holds: { availData.numberOfHolds }</li>
                  </ul>
                 </div> 
                :<button onClick={checkAvailability}>Check availability</button>  } 
                </>
            )
       
        


   

}   

export { Availability }