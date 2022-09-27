import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

let data = [
    {
        date: '2.04.2021',
        name: 'опачки',
        amount: '200',
        distance: '150m',
    },
    {
        date: '05.03.2019',
        name: 'было дело',
        amount: '500',
        distance: '200m',
    },
    {
        date: '02.07.2015',
        name: 'слон',
        amount: '60',
        distance: '500m',
    },
    {
        date: '01.09.2025',
        name: 'золото',
        amount: '700',
        distance: '1km',
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);
