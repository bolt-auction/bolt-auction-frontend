import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as api from '../lib/api';
import { takeLatest } from 'redux-saga/effects';

// Action Type
// 채팅방 목록 불러오기
const LOAD_LIST = 'chat/LOAD_LIST';
const LOAD_LIST_SUCCESS = 'chat/LOAD_LIST_SUCCESS';
// const LOAD_LIST_FAILURE = 'chat/LOAD_LIST_FAILURE';

// 채팅방 입장하기
const ENTER = 'chat/ENTER';
// 채팅방 떠나기
const LEAVE = 'chat/LEAVE';

// 채팅방 생성하기
const CREATE = 'chat/CREATE';
const CREATE_SUCCESS = 'chat/CREATE_SUCCESS';
// const CREATE_FAILURE = 'chat/CREATE_FAILURE';

const SEND = 'chat/SEND';
// const WS_CONNECTED = 'chat/WS_CONNECTED';
// const WS_DISCONNECTED = 'chat/WS_DISCONNECTED';
// const WS_MESSAGE = 'chat/WS_MESSAGE';
// const WS_SEND_MESSAGE = 'chat/WS_SEND_MESSAGE';

// Action Creators
export const loadList = createAction(LOAD_LIST);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE);
export const create = createAction(
  CREATE,
  (chatRoomName, itemId, recvMemberId) => ({
    chatRoomName,
    itemId,
    recvMemberId,
  }),
);
export const send = createAction(SEND, (content, chetRommId) => ({
  content,
  chetRommId,
}));

// Action Sagas
const loadListSaga = createRequestSaga(LOAD_LIST, api.getChatrooms);
const createSaga = createRequestSaga(CREATE, api.postChatroom);

// rootSaga에 전달할 Saga
export function* chatSaga() {
  yield takeLatest(LOAD_LIST, loadListSaga);
  yield takeLatest(CREATE, createSaga);
  yield takeLatest(CREATE_SUCCESS, loadListSaga);
}

// initialState
const initialState = {
  list: [],
  activeRoom: null, // 활성 채팅방
  roomRecord: [], // 채팅방 대화 기록
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
    // [SEND]: (state, action) => ({
    //   ...state,
    //   roomRecord: [
    //     ...state.roomRecord,
    //     {
    //       id: chatId++,
    //       memberId: action.payload.memberId,
    //       text: action.payload.text,
    //     },
    //   ],
    // }),
    [LOAD_LIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload['_embedded'].chatRoomList,
    }),
  },
  initialState,
);

export default chat;
