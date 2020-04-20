import React from 'react';

const MoreInfo = ({title}) =>{
    if (title){
        return (
            <div className="more-book" key={title.infoLink}>
           <h3>More info about {title.title} </h3>
           
           <h2>{ title.title } by { title.authors} </h2>
           <em>{ title.description }</em>
        <p>Page count: { title.pageCount } </p> 
          </div>
    
        )
    }
    else{
        return ("Loading more info...")
    }
   

}   

export { MoreInfo }