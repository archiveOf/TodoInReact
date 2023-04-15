import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllTodos } from './todosSlice'
import Todo from './Todo'

const Todos = () => {
    const todos = useSelector(selectAllTodos)
    return (
        <div className="todos">
            <h2>Todos</h2>
            {
                todos.map( (todo, index) => <Todo todo={todo} key={index} />)
            }
        </div>
    )
}

export default Todos