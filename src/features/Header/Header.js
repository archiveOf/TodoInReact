import React, { useState } from 'react'
import MyModal from '../../common/components/MyModal/MyModal';
import AddTodoForm from './AddTodoForm';
import './styles/Header.css'
import { Link } from 'react-router-dom';
const Header = ({visible, setVisible}) => {
    const [modal, setModal] = useState(false);
    return (
        <header className='main-header'>         
            <Link to="/addTodo">
                <button className='addTask' onClick={() => setVisible(true)}>
                    Новая задача
                </button>
            </Link>

        </header>
    )
}

export default Header