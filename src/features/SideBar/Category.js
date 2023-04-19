import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Category = ({category, index}) => {
    const categoryParam = useParams().category;
    const active = categoryParam === category.title;

    return (
        <li key={index} className={active ? 'active' : ''}>
            <Link to={`/categories/${category.title}`}>
                <img src="/img/1.svg" alt="#" />
                <span>{category.title}</span>
            </Link>
        </li>
    )
}

export default Category