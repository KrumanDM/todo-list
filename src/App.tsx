import React, {useState} from 'react';
import './TodoList/TasksForTodoList.css';
import {Todolist} from './TodoList/Todolist';
import { v1 } from 'uuid';
import TasksForTodoList from './TodoList/TasksForTodoList';

import { HashRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Pages from './Pages';


function App() {
  return (
    <div>
      <HashRouter>
        <Layout>
          <Pages />
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
