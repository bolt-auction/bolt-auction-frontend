import { createAction, handleActions } from 'redux-actions';

// Action Type
const LOAD_LIST = 'chat/LOAD_LIST';
const ENTER = 'chat/ENTER';
const LEAVE = 'chat/LEAVE';

// Action Creators
export const loadList = createAction(LOAD_LIST);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE);

// initialState
const initialState = {
  list: [
    { id: 1, lastText: '안녕하세요.' },
    { id: 2, lastText: '안녕하세요.' },
    { id: 3, lastText: '안녕하세요.' },
  ],
  activeRoom: null,
};

// Reducer
const chat = handleActions(
  {
    [LOAD_LIST]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    [ENTER]: (state, action) => ({
      ...state,
      activeRoom: action.payload,
    }),
    [LEAVE]: (state, action) => ({
      ...state,
      activeRoom: null,
    }),
  },
  initialState,
);

export default chat;
