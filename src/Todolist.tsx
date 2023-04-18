import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: string
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    // const [value, setValue] = useState('')

    // const filteredCountry = countries.filter(country=>{
    //     return country.name.toLowerCase().includes(value.toLowerCase())
    // })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

// Фильтрация при наборе
const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredItems = props.tasks.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
//

    const onAllClickHandler = () => props.changeFilter("Все");
    const onActiveClickHandler = () => props.changeFilter("Крытые");
    const onCompletedClickHandler = () => props.changeFilter("На улице");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={searchText} onChange={handleSearchTextChange}
            />
        </div>
        <ul>
            {
                filteredItems.map(t => {
                    
                    return <li key={t.id}>
                    {t.title} - {t.isDone ? "Done" : "Not done"}
                  </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'Все' ? 'active-filter' : ''} 
                    onClick={ onAllClickHandler }>Все</button>
            <button className={props.filter === 'Крытые' ? 'active-filter' : ''} 
                    onClick={ onActiveClickHandler }>Крытые</button>
            <button className={props.filter === 'На улице' ? 'active-filter' : ''} 
                    onClick={ onCompletedClickHandler }>На улице</button>
        </div>
    </div>
}
