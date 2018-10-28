import axios from 'axios';

// API UTILS:

export const apiFetchItems = () => {
  return axios.get('https://s3-us-west-2.amazonaws.com/frontend.codex/challenge2/items_list.json');
};

export const apiFetchDescriptions = () => {
  return axios.get('https://s3-us-west-2.amazonaws.com/frontend.codex/challenge2/items_description.json');
};

// ACTIONS:

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_DESCRIPTIONS = 'RECEIVE_DESCRIPTIONS';

const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

const receiveDescriptions = descriptions => ({
  type: RECEIVE_DESCRIPTIONS,
  descriptions
});

export const fetchItems = () => dispatch => {
  return apiFetchItems().then( response => {
    console.log('apifetchitems res', response);
    console.log('apifetchitems res.pay', response.payload);
    return dispatch(receiveItems(response.payload));
  });
};

export const fetchDescriptions = () => dispatch => {
  return apiFetchDescriptions().then( response => {
    console.log('apiFetchDescriptions res', response);
    console.log('apiFetchDescriptions res.pay', response.payload);
    return dispatch(receiveDescriptions(response.payload));
  });
};
