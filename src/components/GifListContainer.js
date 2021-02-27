import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
const url= "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=Qc5qWr6m4afyPlgBgJFFTTpZlmcfldGI"

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [link,setLink] = useState("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=Qc5qWr6m4afyPlgBgJFFTTpZlmcfldGI")

    function setURL(search){
        setLink(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=Qc5qWr6m4afyPlgBgJFFTTpZlmcfldGI`)
    }
    console.log(link)

    useEffect(() => {
        fetch(link)
          .then(res => res.json())
          .then(response => {setGifs(response.data.slice(0,3))})
          .catch(error => console.log(error));
      }, [link]);

      const gifList = gifs.map((gif)=> {
        return <GifList
        key={gif.title} 
        gif={gif}
        />
    })

  return (
    
      <div>
        {gifList}
        <GifSearch onHandleSubmit={setURL} />
      </div>
   
  );
}

export default GifListContainer;
