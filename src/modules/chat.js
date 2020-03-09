import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as api from '../lib/api';
import { takeLatest, takeEvery, put } from 'redux-saga/effects';

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
const SEND_SUCCESS = 'chat/SEND_SUCCESS';
const SEND_FAILURE = 'chat/SEND_FAILURE';
// const WS_CONNECTED = 'chat/WS_CONNECTED';
// const WS_DISCONNECTED = 'chat/WS_DISCONNECTED';
// const WS_MESSAGE = 'chat/WS_MESSAGE';
// const WS_SEND_MESSAGE = 'chat/WS_SEND_MESSAGE';

// 채팅 기록 가져오기
const LOAD_RECORDS = 'chat/LOAD_RECORDS';
const LOAD_RECORDS_SUCCESS = 'chat/LOAD_RECORDS_SUCCESS';

// Action Creators
// 채팅방 목록 가져오기
export const loadList = createAction(LOAD_LIST);
// 채팅방 입장
export const enter = createAction(ENTER, id => id);
// 채팅방 떠나기
export const leave = createAction(LEAVE);
// 채팅방 생성하기
export const create = createAction(
  CREATE,
  (chatRoomName, itemId, recvMemberId) => ({
    chatRoomName,
    itemId,
    recvMemberId,
  }),
);
// 채팅 보내기
export const send = createAction(SEND, (socket, msg) => ({
  socket,
  msg,
}));
// 채팅 기록 가져오기
export const loadRecords = createAction(LOAD_RECORDS, chatRoomId => chatRoomId);

// Action Sagas

// 채팅방 목록 가져오기
const loadListSaga = createRequestSaga(LOAD_LIST, api.getChatrooms);
// 채팅방 생성
const createSaga = createRequestSaga(CREATE, api.postChatroom);
// 채팅 기록 가져오기
const loadRecordsSaga = createRequestSaga(LOAD_RECORDS, api.getChatRecords);

const postChatSaga = function*(action) {
  const { socket, msg } = action.payload;
  try {
    socket.sendMessage(
      `/chat.send.message.${msg.chatRoomId}`,
      JSON.stringify({ content: msg.content, senderId: msg.senderId }),
    );
    yield put({ type: SEND_SUCCESS });
  } catch (e) {
    yield put({ type: SEND_FAILURE, payload: e });
  }
};

// rootSaga에 전달할 Saga
export function* chatSaga() {
  yield takeLatest(LOAD_LIST, loadListSaga);
  yield takeLatest(CREATE, createSaga);
  yield takeLatest(CREATE_SUCCESS, loadListSaga);
  yield takeLatest(LOAD_RECORDS, loadRecordsSaga);
  yield takeEvery(SEND, postChatSaga);
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
    [LOAD_RECORDS_SUCCESS]: (state, action) => ({
      ...state,
      roomRecord: [...state.roomRecord, action.payload],
    }),
  },
  initialState,
);

export default chat;
