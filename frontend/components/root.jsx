import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app.jsx';
import configureStore from '../store/store';

let store = configureStore();

const Root = () => (
   <Provider store={ store }>
     <HashRouter>
       <App/>
     </HashRouter>
   </Provider>
 );

export default Root;
