import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { categoryAdded } from './categoriesSlice';
import { useNavigate } from 'react-router-dom';

const AddCategoryModal = ({visible, setVisible}) => {
    const [category, setCategory] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function addCategory() {
        dispatch(categoryAdded({title: category}))
        setCategory('')
        setVisible(false);
    }

    function handleCancelButton() {
        setVisible(false);
    }

    return (
        <div className='addCategoryModal'>
            <h2 className='modalTitle'>Добавить новую категорию</h2>
            <input className='modalInput' type="text" placeholder='Название' value={category} onChange={(e) => setCategory(e.target.value)} />
            <div className='buttons'>
                <button className='modalCancel' onClick={handleCancelButton}>Отмена</button>
                <button className='modalAdd' onClick={addCategory}>Добавить</button>
            </div>
        </div>
    )
}

export default AddCategoryModal