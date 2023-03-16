import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValuesType = "All" | "Completed" | "Active"

function App() {

    const [tasks1, setTasks ]= useState( [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },    
    ])
//     let [filter, setFilter] = useState ("All");
const addTask = (title:string) =>{
    const newTask = {id:v1(), title:title, isDone:false}
    
    setTasks([newTask,...tasks1])
}



//  const removeTask = (taskID:number) => {
//     setTasks (tasks1.filter((el) => el.id !== taskID))
//  }

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
            tasks={tasks1}
            
            addTask={addTask}
            />
                                 
        </div>
    );
}

export default App;
