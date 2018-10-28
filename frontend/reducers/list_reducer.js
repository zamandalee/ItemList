import { merge } from 'lodash';
import { RECEIVE_ITEMS, RECEIVE_DESCRIPTIONS } from '../actions/list_actions';

const listReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return merge( {}, state, { items: action.items });
    case RECEIVE_DESCRIPTIONS:
      return merge( {}, state, { descriptions: action.descriptions });
    default:
      return state;
  }
};

export default listReducer;
