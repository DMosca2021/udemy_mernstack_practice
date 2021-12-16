import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import './index.css';
import App from './App';

// const store = createStore()

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// React.StrictMode <-- This was causing double render during dev. 