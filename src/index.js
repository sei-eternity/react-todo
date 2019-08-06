import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = [
  "Buy ice cream",
  "Give ice cream to Usman",
  "Go home and work!"
];

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
);