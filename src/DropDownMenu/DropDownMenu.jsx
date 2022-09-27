import React from 'react';
import './DropDownMenu.css';

import ColumnSection from "./ColumnSection/ColumnSection";


function DropDownMenu(props) {

    let {columnSection, termsState} = props

    //фильтры для сортировки
    let sortElements = ['название', 'количество', 'расстояние'];
    let sortTermElem = ['равно', 'содержит', 'больше', 'меньше'];

    //состояние условий
    let stateTerms = {
        showList: termsState.showTerms,
        setShowList: termsState.setTerms,
        selectedColumn: termsState.selectedTerm,
        setSelectedColumn: termsState.setSelectedTerm
    };

    return (
        <div className={'menu'}>
            <ColumnSection
                columnSection={columnSection}
                sortElements={sortElements}
            />
            <ColumnSection
                columnSection={stateTerms}
                sortElements={sortTermElem}
            />
        </div>
    );
}

export default DropDownMenu;