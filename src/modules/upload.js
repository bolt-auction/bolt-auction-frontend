import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';

// Action Types
const UPLOAD = 'upload/UPLOAD_DETAIL';
const UPLOAD_SUCCESS = 'upload/UPLOAD_SUCCESS';
const UPLOAD_FAILURE = 'upload/UPLOAD_FAILURE';

// Action Creators
export const uploadAction = createAction(UPLOAD);

// 각 action에 대한 saga
const uploadSaga = createRequestSaga(UPLOAD, api);

// rootSaga에 전달할 각 action에 대한 saga
export function* productSaga() {
  yield takeLatest(UPLOAD, uploadSaga);
}

// Initial State
const initialState = {
  upload: null,
  error: null,
};

// Reducer
const upload = handleActions(
  {
    [UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [UPLOAD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default upload;
