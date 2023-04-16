import React from 'react';
import CategoryList from './CategoryList';
import Data from './Data';
// import ReactDOM from 'react-dom/client';

import './styles/Sidebar.css'

function SideBar() {
    return (
        <div className="sidebar">
            <div><img src="./img/logo.svg" alt="логотип" /></div>
            <CategoryList />
            <Data />
        </div>
    );
}

export default SideBar;