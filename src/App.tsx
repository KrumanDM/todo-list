import React from 'react';
import { useState } from 'react';
import './App.css';
import { Famous } from './Famous';

let [cars, useCars] = useState([
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
  ]);


function App() {
    return (
        <div className="App">
        <Famous r/>
        </div>
    );
}

export default App;
