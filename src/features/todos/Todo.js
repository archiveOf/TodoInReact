import React from 'react';
import { useSelector } from 'react-redux/es/exports'
import { selectAllTodos } from './todosSlice'
import './styles/Todo.css'

const Todo = ({todo, index}) => {
    return (
            <div className='todo' key={index}>
                            <input type="checkbox" />
                            <h2 >{todo.title}</h2>
            </div>
    )
}

export default Todo