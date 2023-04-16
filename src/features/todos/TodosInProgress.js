import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectInProgressTodos } from './todosSlice'
import Todo from './Todo'

const TodosInProgress = ({todos}) => {
    const todosInProgress = todos.filter( todo => todo.status === false)

    return (
        <section className='todosInProgress todoListSection'>
            <h3 className='todoList__title'>Активные задачи</h3>
            <ul className='todoList'>
                {
                    todosInProgress.map( (todo, index) => <Todo todo={todo} key={index} />)
                }
            </ul>
        </section>
    )
}

export default TodosInProgress