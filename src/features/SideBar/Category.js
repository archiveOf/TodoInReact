import React from 'react'
import { Link } from 'react-router-dom'
const Category = ({category, index}) => {
    return (
        <li key={index}>
            <img src="./img/1.svg" alt="#" />
            <Link to={`/${category.title}`}>{category.title}</Link>
        </li>
    )
}

export default Category