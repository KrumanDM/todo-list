import React from 'react';
import { useState } from 'react';
import './App.css';
import { Famous } from './Famous';

type FilterType = 'all' | "Dollars" | 'RUBLS'

function App() {
    let [cars, useCars] = useState([
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
      ]);

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
      ])
    
    const [filter, setFilter] = useState<FilterType>('all');
    
    // по умолчанию эти переменные равны
    let currentMoney = money;
    // если nameButton === 'RUBLS'
    if (filter === 'RUBLS') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    // если nameButton === 'Dollars'
    }
    if (filter === 'Dollars') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
      setFilter(nameButton)
    }

    return (
        
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr,index) => {
                    return (
                      <li key={index}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                      </li>
                      )
                })}
            </ul>
            <div style={{marginLeft:"35px"}}>
              <button onClick={()=>onClickFilterHandler('all')}>all</button>
              <button onClick={()=>onClickFilterHandler('RUBLS')}>ruble</button>
              <button onClick={()=>onClickFilterHandler('Dollars')}>dollar</button>
            </div>
        
        </>
    )   
}

export default App;
{/* <Famous cars={cars} /> */}
