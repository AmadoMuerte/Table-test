import React from 'react';
import classes from './ColumnSection.module.css';
import SectionBtn from "./SectionBtn/SectionBtn";

function ColumnSection(props) {

    let {sortElements, columnSection} = props;

    let functionShowList = () => {
        if (columnSection.showList) {
            return sortElements.map((item) => {
               return <SectionBtn
                   setSelectedColumn={columnSection.setSelectedColumn}
                   name={item}
                   key={item + '' + columnSection.length+1}
               />
            })
        }
    }

    return (
        <div className={classes.list}>
            <ul
                className={classes.listItem}
                onMouseMove={() => columnSection.setShowList(true)}
                onMouseLeave={() => columnSection.setShowList(false)}
            >
                <p className={classes.selected_column}>
                    {columnSection.selectedColumn}
                </p>
                {functionShowList()}
            </ul>
        </div>
    );
}

export default ColumnSection;