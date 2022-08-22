import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import test from './images/testImage.png';

const rootElement = document.getElementById('app-root');

if (!rootElement) {
    throw new Error("Could not locate root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <>
        <h1>Hello, world!</h1>
        <img src={test} />
    </>);