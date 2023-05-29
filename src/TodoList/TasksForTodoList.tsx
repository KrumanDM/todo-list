import React, {useState} from 'react';

import {Todolist} from './Todolist';
import { v1 } from 'uuid';


export type FilterValuesType = "Все" | "Крытые" | "На улице";



function TasksForTodoList() {
   
    let [tasks, setTasks] = useState([
        { id: v1(), title: "Скейтпарк Магистр", isDone: true },
        { id: v1(), title: "Переход на Ленина", isDone: true },
        { id: v1(), title: "Бел Макба", isDone: false },
        { id: v1(), title: "Стелла", isDone: false },
        { id: v1(), title: "БелЭкспо", isDone: false },
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("Все");

    let tasksForTodolist = tasks;

    if (filter === "Крытые") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "На улице") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function changeTaskStatus (taskId: string, isDone: boolean) {
        let task = tasks.find( t => t.id === taskId)
        if (task) {
        task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    return (
        <div id={'hw5-page-junior'}>
            <Todolist title="Скейт споты Минска"
                      tasks={tasksForTodolist}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}
                    />
        </div>
    );
}

export default TasksForTodoList;