import React, { useEffect, useState } from 'react';
import { debounce } from 'rxjs/operators';
import './App.css';

const giphyApi = 'https://api.giphy.com/v1/gifs/search?api_key=4QRs6WkH8TtTZbLX9yqmvt6E9iHn44wv';

function App() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const giphyApiWithQuery = `${ giphyApi }&q=${ query }`;
    fetch(giphyApiWithQuery)
      .then(response => response.json().then(data => setGifs(data.data.map(gift => gift))))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div className="App">
      <input onChange={ e => debounce(setQuery(e.target.value), 1000) }></input>
      <div className="gifs">
        { gifs.map(gif => <img key={gif.images.downsized.url} src={ `${ gif.images.downsized.url }` } height="200" width="auto"/>) }
      </div>
    </div>
  );
}

export default App;
