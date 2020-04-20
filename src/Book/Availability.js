import React, { useState } from 'react';

const Availability = ({id, info, onClickAvailability}) => {

    console.log("info", info);

        if(info){
            return(
              <div className="minuteman-availability">
                
              <p>Library availability info</p>
             <p>Copies available: { info.copiesAvailable } <br/>
             Number of holds: { info.numberOfHolds }</p>
            </div>
            )
        }
        else return(
            <button value={id} onClick={onClickAvailability}>Check availability</button>
        )
        


   

}   

export { Availability }