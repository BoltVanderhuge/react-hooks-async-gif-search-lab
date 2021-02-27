import React, { useState } from "react";

function GifSearch({ onHandleSubmit }) {
    const [search,setSearch] = useState("")
  
    function handleSubmit(e){
    e.preventDefault()
    onHandleSubmit(search)
    setSearch("")
  }


  


  return (
<form onSubmit={handleSubmit}>
        <label>
          Search
          <input type="text" value={search}  onChange={(e) => setSearch(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  );
}

export default GifSearch;
