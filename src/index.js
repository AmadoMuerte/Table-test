import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

let data = [
    {
        date: '2.04.2021',
        name: 'опачки',
        amount: 200,
        distance: '150',
    },
    {
        date: '05.03.2019',
        name: 'было дело',
        amount: 500,
        distance: '200',
    },
    {
        date: '02.07.2015',
        name: 'слон',
        amount: 60,
        distance: '500',
    },
    {
        date: '01.09.2025',
        name: 'золото',
        amount: 700,
        distance: '1964',
    },
    {
        date: '01.09.2025',
        name: 'коза',
        amount: 1000,
        distance: '1203',
    },
    {
        date: '01.09.2025',
        name: 'хлеб',
        amount: 7000,
        distance: '152',
    },
    {
        date: '2.04.2021',
        name: 'опачки',
        amount: 200,
        distance: '150',
    },
    {
        date: '05.03.2019',
        name: 'было дело',
        amount: 500,
        distance: '200',
    },
    {
        date: '02.07.2015',
        name: 'слон',
        amount: 60,
        distance: '500',
    },
    {
        date: '01.09.2025',
        name: 'золото',
        amount: 700,
        distance: '1964',
    },
    {
        date: '01.09.2025',
        name: 'коза',
        amount: 1000,
        distance: '1203',
    },
    {
        date: '01.09.2025',
        name: 'хлеб',
        amount: 7000,
        distance: '152',
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);
