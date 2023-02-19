import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from "./movies";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)