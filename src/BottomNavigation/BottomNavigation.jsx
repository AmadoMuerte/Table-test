import React from 'react';
import './BottomNavigation.css';
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Pagination from "../Pagination/Pagination";

function BottomNavigation(props) {

    let {
        columnState, termsState,
        value, setValue, sortingData, currentPage,
        tableStringPerPage, totalTableString, paginate} = props;

    return (
        <div className={'bottomNav'}>
            <Pagination
                tableStringPerPage={tableStringPerPage}
                totalTableString={totalTableString}
                paginate={paginate}
                currentPage={currentPage}
            />
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