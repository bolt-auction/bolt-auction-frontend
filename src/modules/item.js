import { createAction } from 'redux-actions';

// Action Types
const SEARCH = 'item/SEARCH';
const SEARCH_SUCCESS = 'item/SEARCH_SUCCESS';

const GET_ITEM = 'item/GET_ITEM';
const GET_ITEM_SUCCESS = 'item/GET_ITEM_SUCCESS';

const GET_CATEGORY_ITEM = 'item/GET_CATEGORY_ITEM';

// Action Creators
export const search = createAction(SEARCH, query => query);
export const getItem = createAction(GET_ITEM, id => id);
