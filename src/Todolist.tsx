import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    addTask:(title:string)=>void
}

export function Todolist(props: PropsType) {
    let[title, setTitle] = useState('')
    
    


    return <div>
             

        <h3>{props.title}</h3>
        <div>
            <input onChange={(event:ChangeEvent<HTMLInputElement>) => {event.currentTarget.value}}/>
            <button onClick={(event:MouseEvent<HTMLButtonElement>) => props.addTask(title)}>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
                return (
                    
                    <li key={el.id}>
                        
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
            
        </div>
    </div>
}
