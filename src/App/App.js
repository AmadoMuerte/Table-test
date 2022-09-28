
import React, {useState} from 'react';
import './App.css';
import Table from "../Table/Table";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

function App({data}) {

    const [stateData, setStateData] = useState(data);

    //состояние для выбора колонок
    const [showList, setShowList] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState('название');
    let columnState = {showList, setShowList, selectedColumn, setSelectedColumn};

    //состояние для выбора условий сортировки
    const [showTerms, setTerms] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState('равно');
    let termsState = {showTerms, setTerms, selectedTerm, setSelectedTerm}

    // состояние текстого поля
    const [value, setValue] = useState('');

    // сортировка >
    let sortMore = (value, column) => {
        let newData;
        if (column === 'название') {
            return newData = data.filter((item) => {
                return item.name.length > value.length;
            })
        } else if (column === 'количество') {
            return newData = data.filter((item) => {
                return item.amount > value;
            })
        } else if (column === 'расстояние') {
            return newData = data.filter((item) => {
                item.distance += '';
                return item.distance > value;
            })
        }
        return newData;
    }

    // сортировка <
    let sortLess = (value, column) => {
        let newData;
        if (column === 'название') {
            return newData = data.filter((item) => {
                return item.name.length < value.length;
            })
        } else if (column === 'количество') {
            return newData = data.filter((item) => {
                return item.amount < value;
            })
        } else if (column === 'расстояние') {
            return newData = data.filter((item) => {
                item.distance += '';
                return item.distance < value;
            })
        }
        return newData;
    }

    // сортировка ===
    let sortEqually = (value, column) => {
        let newData;
        if (column === 'название') {
            return newData = data.filter((item) => {
                return item.name === value;
            })
        } else if (column === 'количество') {
            return newData = data.filter((item) => {
                item.amount += '';
                return item.amount === value;
            })
        } else if (column === 'расстояние') {
            return newData = data.filter((item) => {
                item.distance += '';
                return item.distance === value;
            })
        }
        return newData;
    }

    // сортировка по содержанию
    let sortContain = (value, column) => {
        let newData;
        let valueArr = [...value];
        if (column === 'название') {
            newData = stateData.filter((item) => {
                let element;
                let arr = [...item.name];
                valueArr.forEach((el) =>{
                    element = arr.indexOf(el);
                })
                return element !== -1;
            })
        } else if (column === 'количество') {
            newData = stateData.filter((item) => {
                let element;
                let arr = [...item.amount + ''];
                valueArr.forEach((el) =>{
                    element = arr.indexOf(el);
                })
                return element !== -1;
            })
        } else if (column === 'расстояние') {
            newData = stateData.filter((item) => {
                let element;
                let arr = [...item.distance + ''];
                valueArr.forEach((el) =>{
                    element = arr.indexOf(el);
                })
                return element !== -1;
            })
        }
        return newData;
    }


    let sortingData = (value) => {
        if (value === '') {
            setStateData(data);
        } else {
            if (selectedTerm === 'больше') {
                setStateData(sortMore(value, selectedColumn));
            } else if (selectedTerm === 'меньше') {
                setStateData(sortLess(value, selectedColumn));
            } else if (selectedTerm === 'равно') {
                setStateData(sortEqually(value, selectedColumn));
            } else if (selectedTerm === 'содержит') {
                setStateData(sortContain(value, selectedColumn));
            }
        }
    }


    return (
        <>
            <Table data={stateData}/>
            <BottomNavigation
                columnState={columnState}
                termsState={termsState}
                value={value}
                setValue={setValue}
                sortingData={sortingData}
            />
        </>
    )
}

export default App;
