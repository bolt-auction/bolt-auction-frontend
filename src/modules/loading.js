import { createAction, handleActions } from 'redux-actions';

// Action Types
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// Action Creators
export const startLoading = createAction(
  START_LOADING,
  requestType => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType,
);

// Initial State
const initialState = {};

// Reducer
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
  },
  initialState,
);

export default loading;
