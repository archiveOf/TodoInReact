import React, { useState } from 'react'
import MyModal from '../../common/components/MyModal/MyModal';
import AddTodoForm from './AddTodoForm';
const Header = () => {
    const [modal, setModal] = useState(false);
    return (
        <header>
            <button onClick={() => setModal(true)}>Новая задача</button>
            <MyModal visible={modal} setVisible={setModal}>
                <AddTodoForm visible={modal} setVisible={setModal}/>
            </MyModal>
        </header>
    )
}

export default Header