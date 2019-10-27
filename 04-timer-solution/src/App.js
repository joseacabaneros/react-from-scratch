import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(time => time + 1);
    }, 1000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>You spend in the page: {time} seconds</p>
      </header>
    </div>
  );
}

export default App;
