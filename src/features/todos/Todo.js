import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { selectAllTodos, todoStatusUpdated, todoDeleted } from './todosSlice'
import './styles/Todo.css'

const Todo = ({todo, index}) => {
    const todos = useSelector(selectAllTodos)
    const dispatch = useDispatch();


    function handleChecked() {
        dispatch(todoStatusUpdated({id: todo.id}))
    }

    function handleDeleteTask() {
        console.log(todo.id)
        dispatch(todoDeleted({id: todo.id}))
    }
    return (
            <div className={`todo ${todo.status ? 'completed' : ''}`} key={index}>
                            <input 
                                type="checkbox" 
                                checked={todo.status}
                                onChange={handleChecked}
                            />
                            <h2 >{todo.title}</h2>
                            <button ><img src='./img/trash.svg' alt='delete task' onClick={handleDeleteTask}/></button>
            </div>
    )
}

export default Todo