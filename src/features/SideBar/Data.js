import React from 'react'

const Data = () => {
    return (
        <div>
            <h2 className='data__title'>Данные</h2>
            <ul className='data__items'>
                <li>
                    <img src="./img/statistic.svg" alt='нет'/> Статистика
                </li>
                <li>
                    <img src="./img/up.svg"/> Сравнить
                </li>
            </ul>
        </div>
    );
};

export default Data;