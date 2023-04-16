import React, { useState } from 'react'
import MyModal from '../../common/components/MyModal/MyModal';
import AddTodoForm from './AddTodoForm';
import './styles/Header.css'
const Header = () => {
    const [modal, setModal] = useState(false);
    return (
        <header className='main-header'>
            <button className='addTask' onClick={() => setModal(true)}>Новая задача</button>
            <MyModal visible={modal} setVisible={setModal}>
                <AddTodoForm visible={modal} setVisible={setModal}/>
            </MyModal>
        </header>
    )
}

export default Header