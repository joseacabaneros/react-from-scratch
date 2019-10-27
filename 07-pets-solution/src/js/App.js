import React, { useReducer } from 'react';
import PetForm from './components/forms/PetForm';

import Owner from './components/Owner';
import Pets from './components/Pets';
import { genUuid } from './utils';

const App = ({ ownerName = '?', petsList = {} }) => {
  const reducer = (pets, action) => {
    switch (action.type) {
      case 'APPEND':
        return {
          ...pets,
          [genUuid()]: {
            name: action.payload.name,
            type: action.payload.type
          }
        };
      case 'REMOVE':
        console.log('Here the mutation state to remove a pet');
      default:
        console.log('Not action available');
    }
  };

  const [pets, dispatch] = useReducer(reducer, petsList);

  return (
    <div className="c-app">
      <Owner name={ ownerName } numPets={ Object.keys(pets).length }/>
      <Pets pets={ pets }/>
      <PetForm dispatch={ dispatch }/>
    </div>
  );
};

export default App;
