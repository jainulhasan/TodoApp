import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import Todolist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div className="App">
        <Todolist/>
    </div>,
    document.getElementById('root')
);

