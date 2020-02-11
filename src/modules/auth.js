import { createAction, handleActions } from 'redux-actions';

// Action Types
const SIGNIN = 'auth/SIGNIN';
const SIGNOUT = 'auth/SIGNOUT';

// Action Creators
export const signin = createAction(SIGNIN, (email, password) => ({
  email,
  password,
}));
export const signout = createAction(SIGNOUT);

// Fake Data
const users = [
  { email: 'subin', password: '1234', name: '수빈' },
  { email: 'jisop', password: '1234', name: '지섭' },
];

const authKey = 'User';

// Initial State
const initialState = {
  user: null,
  authenticated: localStorage.getItem(authKey),
  authKey,
};

// Reducer
const auth = handleActions(
  {
    [SIGNIN]: (state, action) => {
      const user = users.find(
        user =>
          user.email === action.email && user.password === action.password,
      );
      return {
        ...state,
        user,
        authenticated: user !== null,
      };
    },
    [SIGNOUT]: (state, action) => ({
      ...state,
      user: null,
      authenticated: false,
    }),
  },
  initialState,
);

export default auth;
