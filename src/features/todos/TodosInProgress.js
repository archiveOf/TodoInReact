import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectInProgressTodos } from './todosSlice'
import Todo from './Todo'

const TodosInProgress = () => {
    const todosInProgress = useSelector(selectInProgressTodos)

    return (
        <section className='todosInProgress'>
            <h3>Активные задачи</h3>
            {
                todosInProgress.map( (todo, index) => <Todo todo={todo} key={index} />)
            }
        </section>
    )
}

export default TodosInProgress