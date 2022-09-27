import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <tr>
            <th>
                Дата
            </th>
            <th>
                Название
            </th>
            <th>
                Количество
            </th>
            <th>
                Расстояние
            </th>
        </tr>
    );
}

export default Navigation;