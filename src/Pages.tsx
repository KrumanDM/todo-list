import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';
import { Header } from './Header/Header';
import TasksForTodoList from './TodoList/TasksForTodoList';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    SKATE_MAP: '/skate-map'
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
    
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                
                <Route path="/" element={<Navigate to={PATH.SKATE_MAP}/>} />       

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path="/skate-map" element={<TasksForTodoList />} />
                <Route path="/junior" element={<Junior />} />
                <Route path="/junior-plus" element={<JuniorPlus />} />

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages