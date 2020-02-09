// Action Types
const SIGNIN = 'auth/SIGNIN';
const SIGNOUT = 'auth/SIGNOUT';

// Action Creators
export const signin = (email, password) => ({ type: SIGNIN, email, password });
export const signout = () => ({ type: SIGNOUT });

const users = [
  { email: 'subin', password: '1234', name: '수빈' },
  { email: 'jisop', password: '1234', name: '지섭' },
];

// Initial State
const initialState = {
  user: null,
  authenticated: false,
};

// Reducer
function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      const user = users.find(
        user =>
          user.email === action.email && user.password === action.password,
      );
      return {
        ...state,
        user,
        authenticated: user !== null,
      };
    case SIGNOUT:
      return {
        ...state,
        user: null,
        authenticated: false,
      };
    default:
      return state;
  }
}

export default auth;
