
import './App.css';
import React, {useState} from 'react';
import Table from "../Table/Table";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

function App({data}) {
    const [show, setShow] = useState(false);

    //состояние для выбора колонок
    const [showList, setShowList] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState('Колонка');
    let columnState = {showList, setShowList, selectedColumn, setSelectedColumn};

    //состояние для выбора условий сортировки
    const [showTerms, setTerms] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState('условия');
    let termsState = {showTerms, setTerms, selectedTerm, setSelectedTerm}

    // функция для изменения состояния выпадающего меню
    let dropDown = () => {
        if (show) {
            return (
                <DropDownMenu
                    columnSection={columnState}
                    termsState={termsState}
                />
            )
        }
    }
  return (
        <>
            <Table data={data}/>
            <BottomNavigation
                show={show}
                setShow={setShow}
                dropDown={dropDown}
            />
        </>
  )
}

export default App;
