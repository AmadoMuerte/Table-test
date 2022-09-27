import React from 'react';
import './SectionBtn.css';

function SectionBtn(props) {
// кнопка для выбора условий и для выбора колонки
    let {setSelectedColumn, name} = props;

    return (
        <button
            className={"btnSection"}
            onClick={() => {
                setSelectedColumn(name)
            }}
        >
            {name}
        </button>
    );
}

export default SectionBtn;