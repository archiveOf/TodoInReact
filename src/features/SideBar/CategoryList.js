import React, { useState } from 'react';
import MyModal from '../../common/components/MyModal/MyModal';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { selectAllCategories, categoryAdded} from './categoriesSlice';

const CategoryList = () => {
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState();

    const categories = useSelector(selectAllCategories);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="category__title">Категории</h2>
            <ul className='category__items'>
                {
                    categories.map((category, index) => {
                        return <li key={index}><img src="./img/1.svg" alt="#" />{category.title}</li>; //Сделать так чтобы цифра увеличивалась на каждую итерацию
                    })
                }
            </ul>
            <div className='category__button' onClick={() => setModal(true)}>
                <img src='./img/addbutton.svg' alt='#' />
                <button>Добавить</button>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
                <h2 className='modalTitle'>Добавить новую категорию</h2>
                <input className='modalInput' type="text" placeholder='Название' value={category} onChange={(e) => setCategory(e.target.value)} />
                <div className='buttons'>
                    <button className='modalCancel' onClick={() => setModal(false)}>Отмена</button>
                    <button className='modalAdd' onClick={() => {
                        dispatch(categoryAdded(category))
                        setModal(false);
                    }}>Добавить</button>
                </div>
            </MyModal>
        </div>
    )
}


export default CategoryList;