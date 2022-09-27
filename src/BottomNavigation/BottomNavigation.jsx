import React from 'react';
import './BottomNavigation.css';

function BottomNavigation(props) {

    let {dropDown, show, setShow} = props;

    return (
        <div className={'bottomNav'}>
            <div className={'bottomNav_menu'}>
                <button
                    className={"btnDropDown"}
                    onClick={() => setShow(!show)}
                >
                    Сортировать
                </button>
                {dropDown()}
            </div>
        </div>
    );
}

export default BottomNavigation;