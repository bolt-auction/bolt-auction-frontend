import { createAction, handleActions } from 'redux-actions';

// Action Type
// 채팅방 목록 불러오기
const LOAD_LIST = 'chat/LOAD_LIST';
// 채팅방 입장하기
const ENTER = 'chat/ENTER';
// 채팅방 떠나기
const LEAVE = 'chat/LEAVE';

// 채팅방 생성하기
const CREATE = 'chat/CREATE';

// Action Creators
export const loadList = createAction(LOAD_LIST);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE);
export const create = createAction(CREATE);

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
