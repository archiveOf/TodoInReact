import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectCompletedTodos } from './todosSlice'
import Todo from './Todo'

const TodosIsCompleted = () => {
    const todosIsCompleted = useSelector(selectCompletedTodos)

    return (
        <section className='todosInProgress'>
            <h3>Завершенные задачи</h3>
            {
                todosIsCompleted.map( (todo, index) => <Todo todo={todo} key={index} />)
            }
        </section>
    )
}

export default TodosIsCompleted