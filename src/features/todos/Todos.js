import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllTodos } from './todosSlice'
import Todo from './Todo'
import TodosInProgress from './TodosInProgress'
import TodosIsCompleted from './TodosIsCompleted'

const Todos = () => {
    const todos = useSelector(selectAllTodos)
    return (
        <div className="todos">
            <TodosInProgress />
            <TodosIsCompleted />
        </div>
    )
}

export default Todos