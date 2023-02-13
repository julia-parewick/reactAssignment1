import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  React.createElement(
    "h1",
    {style:{color:"blue"}},
    "Hello World!"),
    document.getElementById("root")
);

