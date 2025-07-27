import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx'

/*
const reactElement = (
    <a href="https://google.com" target="_blank">
        click to go google
    </a>
);
  both are same but to import the react*/ 

const reactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'click to go google',
)


createRoot(document.getElementById('root')).render(
    reactElement
)
