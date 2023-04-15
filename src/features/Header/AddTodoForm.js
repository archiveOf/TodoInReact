import React from 'react'

const AddTodoForm = () => {
    return (
        <div id="addTodoModal">
            <h3>Добавить новую задачу</h3>
            <form>
                <label htmlFor="title">Что нужно сделать?</label>
                <input id="title" name="title" type="text" placeholder="Приготовить ужин"/>

                <label htmlFor="category">Категория</label>
                <select id="category" required>
                    <option defaultValue={""} hidden>Выбрать</option>
                    <option></option>
                </select>

                <label htmlFor="end">Когда?</label>
                <input type="date" id="end" name="end"></input>

                <label htmlFor="priority">Приоритет задачи</label>
                <select id="priority" required>
                    <option defaultValue={""} hidden>Выбрать</option>
                    <option value="low">Низкий</option>
                    <option value="middle">Средний</option>
                    <option value="high">Высокий</option>
                </select>

                <button>Отменить</button>
                <button>Добавить</button>
            </form>
        </div>
    )
}

export default AddTodoForm