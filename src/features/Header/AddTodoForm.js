import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories } from '../SideBar/categoriesSlice';
import { todoAdded } from '../todos/todosSlice';

const AddTodoForm = ({visible, setVisible}) => {

    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState();
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
        <div id="addTodoModal">
            <h3>Добавить новую задачу</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="title">Что нужно сделать?</label>
                <input id="title" name="title" type="text" placeholder="Приготовить ужин" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                <label htmlFor="category">Категория</label>
                <select id="category" required onChange={(e) => { setCategory(e.target.value) }}>
                    <option defaultValue={""} hidden>Выбрать</option>
                    {
                        categories.map((category, index) => {
                            return <option value={category.title} key={index}>{category.title}</option>;
                        })
                    }
                </select>

                <label htmlFor="end">Когда?</label>
                <input type="date" id="end" name="end" onChange={(e) => { setLimit(e.target.value) }}></input>

                <label htmlFor="priority">Приоритет задачи</label>
                <select id="priority" required onChange={(e) => { setPriority(e.target.value) }}>
                    <option defaultValue={""} hidden>Выбрать</option>
                    <option value="low">Низкий</option>
                    <option value="middle">Средний</option>
                    <option value="high">Высокий</option>
                </select>

                <button>Отменить</button>
                <button onClick={AddTodo}>Добавить</button>
            </form>
        </div>




    )
}



export default AddTodoForm