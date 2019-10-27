import React from 'react';
import animals from './animals.json';

import './App.css';

const AnimalComponent = ({ name, ...rest }) =>
  <div className={ 'animal' }>
    <h2 className={ 'animal_name' }>{ name }</h2>
    <img className={ 'animal_image' } src={ `/images/${ rest.image }` }/>
    <section className={ 'animal_estimate' }>
      { rest.estimate.max && <p>Max estimate: { rest.estimate.max }</p> }
      { rest.estimate.min && <p>Min estimate: { rest.estimate.min }</p> }
    </section>
  </div>;

function App() {
  return (
    <div className="App">
      <h1 className="app_title">Pixel animals</h1>
      <div className="animals">
        {
          Object.entries(animals).map(([index, animal]) => (
            <AnimalComponent key={ index } { ...animal }/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
