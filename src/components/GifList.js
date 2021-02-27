import React from "react";

function GifList({ gif }) {


  return (
    
      
        <ul> 
          <li>{gif.title}
          <img src={gif.images.original.url} alt={gif.title}></img>
          </li>
        </ul>
      
  
  );
}

export default GifList;
