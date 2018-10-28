import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root.jsx';
import configureStore from './store/store';

document.addEventListener( 'DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;

  const content = document.getElementById("content");
  ReactDOM.render(<h1>Item List!</h1>, content);
});
