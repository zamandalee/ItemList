import axios from 'axios';

// API UTILS:

export const fetchItems = () => {
  return axios.get('https://s3-us-west-2.amazonaws.com/frontend.codex/challenge2/items_list.json');
};

export const fetchDescriptions = () => {
  return axios.get('https://s3-us-west-2.amazonaws.com/frontend.codex/challenge2/items_description.json');
};

// ACTIONS:

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_DESCRIPTIONS = 'RECEIVE_DESCRIPTIONS';

const receiveItems = payload => ({
  type: RECEIVE_ITEMS,
  payload
});

const receiveDescriptions = payload => ({
  type: RECEIVE_DESCRIPTIONS,
  payload
});
