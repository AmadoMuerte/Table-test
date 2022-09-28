import React from 'react';
import './DropDownMenu.css';
import ColumnSection from "./ColumnSection/ColumnSection";

function DropDownMenu(props) {

    let {columnSection, termsState,
        value, setValue, sortingData} = props

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

    let valueChange = (e) => {
        setValue(e.target.value);
        sortingData(e.target.value);

    }

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
            <input
                type="text"
                placeholder={'Введите значение'}
                value={value}
                onChange={valueChange}
            />
        </div>
    );
}

export default DropDownMenu;