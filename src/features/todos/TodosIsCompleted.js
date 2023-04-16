import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectCompletedTodos } from './todosSlice'
import Todo from './Todo'

const TodosIsCompleted = ({todos}) => {
    const todosIsCompleted = todos.filter( todo => todo.status === true)

    return (
        <section className='todosIsCompleted todoListSection'>
            <h3 className='todoList__title'>Завершенные задачи</h3>
            <ul className='todoList'>
                {
                    todosIsCompleted.map( (todo, index) => <Todo todo={todo} key={index} />)
                }
            </ul>
        </section>
    )
}

export default TodosIsCompleted