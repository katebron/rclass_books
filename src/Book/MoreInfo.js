import React, { useState } from 'react';

const MoreInfo = ({title}) =>{

    return (
        
        <div className="more-book">
       <h3>Here is more info about</h3>
       
       <h2>{ title.title } </h2>
       <em>{ title.description }</em>
    <p>Page count: { title.pageCount } </p> 
      </div>

    )

}   

export { MoreInfo }