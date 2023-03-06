import React from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    let [filterValue, setFilterValue]=useState('All')
    const filterTask = (buttonName: string) => {
        setFilterValue(buttonName)
    }

    let filteredTasks = tasks1
    if (filterValue === 'Active') {
        filteredTasks = tasks1.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        filteredTasks = tasks1.filter(el => el.isDone)
    }
    if (filterValue === 'All') {
        filteredTasks = tasks1
    }


    return <div>
             

        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
                return (
                    
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>x</button>
                        <input type="checkbox"  checked={el.isDone}/>
                        <span>{el.title}</span>
                    
                    
                        </li>
                )
            })}
        </ul>
        {/* <ul>
            <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
        </ul> */}
        <div>
            <button onClick={() => {props.changeFilter("All")}}>All</button>
            <button onClick={() => {props.changeFilter("Active")}}>Active</button>
            <button onClick={() => {props.changeFilter("Completed")}}>Completed</button>
        </div>
    </div>
}
