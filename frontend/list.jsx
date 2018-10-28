import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root.jsx';

document.addEventListener( 'DOMContentLoaded', () => {
  const content = document.getElementById("content");
  ReactDOM.render(<h1>Item List!</h1>, content);
});
