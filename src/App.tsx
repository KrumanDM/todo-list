import React, { useState } from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValuesType = "All" | "Completed" | "Active"

function App() {

    const [tasks1, setTasks ]= useState( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },    
    ])
//     let [filter, setFilter] = useState ("All");



 const removeTask = (taskID:number) => {
    setTasks (tasks1.filter((el) => el.id !== taskID))
 }

//  const changeFilter = (buttonName:FilterValuesType) => {
//     setFilter(value)
//  }
 
//  let filteredTasks = tasks1

//  if(filter === "Completed") {
//     filteredTasks = tasks1.filter((el) => el.isDone === true)
//  }
//  if(filter === "Active") {
//     filteredTasks = tasks1.filter((el) => el.isDone === false)
//  }

    return (
        <div className="App">
            <Todolist 
            title="What to learn" 
            tasks={filteredTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
            />
                                 
        </div>
    );
}

export default App;
