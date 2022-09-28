import React from 'react';
import './BottomNavigation.css';
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function BottomNavigation(props) {

    let {
        columnState, termsState,
        value, setValue, sortingData} = props;

    return (
        <div className={'bottomNav'}>
            <div className={'pagination'}>
                <div className={'pagination__item'}>01</div>
                <div className={'pagination__item'}>02</div>
                <div className={'pagination__item'}>03</div>
                <div className={'pagination__item'}>04</div>
                <div className={'pagination__item'}>05</div>
            </div>
            <div className={'bottomNav_menu'}>
                <DropDownMenu
                    columnSection={columnState}
                    termsState={termsState}
                    value={value}
                    setValue={setValue}
                    sortingData={sortingData}
                />
            </div>
        </div>
    );
}

export default BottomNavigation;