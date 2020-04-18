import React, { useState } from 'react';

const MoreInfo = ({title}) =>{

    return (
        <>
       <h3>Here is more info about</h3>
       <div className="more-book">
       <h2>{ title.title } </h2>
       <em>{ title.description }</em>
    <p>Page count: { title.pageCount } </p> 
      </div>
      </>
    )

}   

export { MoreInfo }