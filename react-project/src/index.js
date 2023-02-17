import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// react component
import App from "./movies";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)