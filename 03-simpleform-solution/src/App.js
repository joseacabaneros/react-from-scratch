import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(query);
  };

  return (
    <form action="#" method="POST" onSubmit={ e => handleClick(e) }>
      <input onChange={ e => setQuery(e.target.value) } type="text" autoComplete="false"/>
      <button>Search</button>
    </form>
  );
};

export default App;
