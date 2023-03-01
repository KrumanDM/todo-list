import React from 'react';
import { useState } from 'react';
import './App.css';
import { Famous } from './Famous';


function App() {
    let [cars, useCars] = useState([
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
      ]);
      
    return (
        <div className="App">
        <Famous cars={cars} />
        </div>
    );
}

export default App;
