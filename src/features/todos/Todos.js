import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllTodos } from './todosSlice'

const Todos = () => {
    const todos = useSelector(selectAllTodos)
    return (
        <div className="todos">
            <h2>Todos</h2>
            {
                todos.map( (todo, index) => {
                    return (
                    <div key={index}>
                        <span>{todo.id}</span>
                        <h2 >{todo.name}</h2>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Todos