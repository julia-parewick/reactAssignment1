import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// react component
import App from "./movies";
import App2 from "./submit";

// ReactDOM.render(<App library="React"/>,document.getElementById("root"));
// ReactDOM.render(<App2 library="React"/>,document.getElementById("root2"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)