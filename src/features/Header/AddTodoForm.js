import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories } from '../SideBar/categoriesSlice';
import { todoAdded } from '../todos/todosSlice';
import './styles/AddTodoModal.css'
import { useHref } from 'react-router-dom'

const AddTodoForm = ({visible, setVisible}) => {

    console.log(useHref())

    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(useHref());
    const [priority, setPriority] = useState();
    const [limit, setLimit] = useState();

    function AddTodo() {
        dispatch(todoAdded({ title: title, category: category, limit: limit, priority: priority}));
        setVisible(false);
        setTitle('');
        setCategory('');
        setPriority('');
        setLimit('');
    };

    return (
        <div className="addTodoModal">
            <h3 className='addTodoModal__header'>Добавить новую задачу</h3>
            <form className='addTodoModalForm' onSubmit={(e) => e.preventDefault()}>
                <div className='title__field'>
                    <label htmlFor="title">Что нужно сделать?</label>
                    <input id="title" name="title" type="text" placeholder="Приготовить ужин" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                <div className='secondary-information__field'>
                    <div>
                        <label htmlFor="category">Категория</label>
                        <select id="category"  required onChange={(e) => { setCategory(e.target.value) }}>
                            <option defaultValue={""} hidden>Выбрать</option>
                            {
                                categories.map((category, index) => {
                                    return <option value={category.title} key={index}>{category.title}</option>;
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="limit">Когда?</label>
                        <input type="date" id="limit" name="limit" onChange={(e) => { setLimit(e.target.value) }}></input>
                    </div>

                    <div>
                        <label htmlFor="priority">Приоритет задачи</label>
                        <select id="priority" required onChange={(e) => { setPriority(e.target.value) }}>
                            <option defaultValue={""} hidden>Выбрать</option>
                            <option value="low">Низкий</option>
                            <option value="middle">Средний</option>
                            <option value="high">Высокий</option>
                        </select>
                    </div>

                </div>

                <div className='btns__field'>
                    <button className='cancelTodo__btn' onClick={() => setVisible(false)}>Отменить</button>
                    <button className='addTodo__btn' onClick={AddTodo}>Добавить</button>
                </div>
            </form>
        </div>




    )
}



export default AddTodoForm