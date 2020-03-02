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

//TODO Saga로 구현되어야함
// 채팅 보내기
const POST = 'chat/POST';

// Action Creators
export const loadList = createAction(LOAD_LIST);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE);
export const create = createAction(CREATE);
export const post = createAction(POST, (memberId, text) => ({
  memberId,
  text,
}));

let chatId = 4;
// initialState
const initialState = {
  list: [
    { id: 1, lastText: '안녕하세요.' },
    { id: 2, lastText: '안녕하세요.' },
    { id: 3, lastText: '안녕하세요.' },
  ],
  activeRoom: null, // 활성 채팅방
  roomRecord: [
    { id: 0, memberId: 0, text: '안녕하세요.' },
    { id: 1, memberId: 0, text: '저는 박수빈입니다.' },
    { id: 2, memberId: 1, text: '아 예...' },
    { id: 3, memberId: 1, text: '반갑습니다.' },
  ], // 채팅방 대화 기록
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
    [POST]: (state, action) => ({
      ...state,
      roomRecord: [
        ...state.roomRecord,
        {
          id: chatId++,
          memberId: action.payload.memberId,
          text: action.payload.text,
        },
      ],
    }),
  },
  initialState,
);

export default chat;
