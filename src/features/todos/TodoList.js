import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllTodos, selectTodosByCategory } from './todosSlice'
import Todo from './Todo'
import TodosInProgress from './TodosInProgress'
import TodosIsCompleted from './TodosIsCompleted'
import './styles/TodoList.css'
import { useParams } from 'react-router-dom'

const TodoList = () => {
    // console.log(category)
    const { category } = useParams();
    const todos = useSelector( state => state.todos.filter( todo => todo.category === category))
    // console.log(todos)
    return (
        <div className="todos__container">
            <TodosInProgress todos={todos}/>
            <TodosIsCompleted todos={todos}/>
        </div>
    )
}

export default TodoList