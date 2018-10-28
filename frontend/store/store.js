import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import listReducer from '../reducers/list_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    listReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
