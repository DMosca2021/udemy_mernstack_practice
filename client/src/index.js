import React from 'react';
import { render } from 'react-dom';
import { Provider, createStore  } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

