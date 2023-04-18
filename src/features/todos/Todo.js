import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { selectAllTodos, todoStatusUpdated, todoDeleted } from './todosSlice'

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
            <li className={`todo ${todo.status ? 'completed' : ''}`} key={index}>
                            <input 
                                type="checkbox" 
                                checked={todo.status}
                                onChange={handleChecked}
                            />
                            <span className='todo__text'>{todo.title}</span>
                            <div className='todo__btns'>
                                <button className='todo__btn todo__btn-edit'>
                                    <img src='/img/edit.svg' alt='edit task'/>
                                </button>
                                <button className='todo__btn todo__btn-delete'>
                                    <img src='/img/trash.svg' alt='delete task' onClick={handleDeleteTask}/>
                                </button>
                            </div>
            </li>
    )
}

export default Todo