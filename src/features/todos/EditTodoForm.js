import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoDeleted } from './todosSlice';

const EditTodoForm = ({todo, editing, setEditing}) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(todo.title)

    function handleEditing() {
        setEditing(false);
    }

    function handleDeleteTask() {
        console.log(todo.id)
        dispatch(todoDeleted({id: todo.id}))
    }

    return (
        <li className={`todo ${todo.status ? 'completed' : ''}`} key={todo.id}>
                                <input value={title} onClick={(e) => setTitle(e.target.value)} className='todo__text' />
                                <div className='todo__btns'>
                                    <button className='todo__btn todo__btn-edit' onClick={handleEditing}>
                                        <img src='/img/edit.svg' alt='edit task'/>
                                    </button>
                                    <button className='todo__btn todo__btn-delete'>
                                        <img src='/img/trash.svg' alt='delete task' onClick={handleDeleteTask}/>
                                    </button>
                                </div>
        </li>
    )
}

export default EditTodoForm