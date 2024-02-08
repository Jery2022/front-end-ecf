import React from 'react';
import './App.css';
import { listCars } from './js/script';

function App() {
  console.log(listCars);
  return (
    <>
      <div>
        {listCars.map((tableau) => (
          <pre key={tableau.id}>{tableau.nameCar}</pre>
        ))}
      </div>
    </>
  );
}
//{JSON.stringify(tableau, null, 2)}
export default App;
