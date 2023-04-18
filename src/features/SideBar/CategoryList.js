import React, { useState } from 'react';
import MyModal from '../../common/components/MyModal/MyModal';
import Category from './Category';
import AddCategoryModal from './AddCategoryModal';

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { selectAllCategories, categoryAdded} from './categoriesSlice';

const CategoryList = () => {
    const [modal, setModal] = useState(false);
    const categories = useSelector(selectAllCategories);

    return (
        <div>
            <h2 className="category__title">Категории</h2>
            <ul className='category__items'>
                {
                    categories.map( (category, index) => <Category key={index} category={category}/> )
                }
            </ul>
            <button className='category__button' onClick={() => setModal(true)}>
                <img src='/img/addbutton.svg' alt='#' />
                <span>Добавить</span>
            </button>
            { 
                modal 
                && 
                <MyModal visible={modal} setVisible={setModal}>
                    <AddCategoryModal visible={modal} setVisible={setModal}/>
                </MyModal>
            }
      
        </div>
    )
}


export default CategoryList;