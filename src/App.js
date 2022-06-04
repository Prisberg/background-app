import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState('')
  const [unsplashData, setUnsplashData] = useState({})

  useEffect(() => {
    if (unsplashData) {
      setImgSrc(unsplashData.urls)
    }
  }, [unsplashData]);

  /* topic: wallpaper, orientation: landscape or portrait, w & h: depending on what aspect ratio the client submits. */
  function fetchData() {
    axios('https://api.unsplash.com/photos/random/?client_id=c1g058wnx31kOmxah92bXbf735Twx3SGG9oJz7yEolc')
      .then(res => setUnsplashData(res.data))
      //set loading to false
      .catch(err => console.error(err));
  }


  return (
    <div className="App">
      <h1>WELCOME TO BACKGROUND APP</h1>
      {imgSrc ? <img src={imgSrc.full} /> : null}
      {/* Add loading bar to button */}
      <button onClick={fetchData}>FETCH</button>
    </div>
  );
}

export default App;
