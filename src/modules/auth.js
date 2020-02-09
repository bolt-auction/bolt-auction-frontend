// Action Types
const SIGNIN = 'auth/SIGNIN';
const SIGNOUT = 'auth/SIGNOUT';

// Action Creators
export const signin = () => ({ type: SIGNIN });
export const signout = () => ({ type: SIGNOUT });

const users = [
  { email: 'subin', password: '1234', name: '수빈' },
  { email: 'jisop', password: '1234', name: '지섭' },
];

const initialState = {
  user: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        user: users.find(
          user =>
            user.email === action.email && user.password === action.password,
        ),
      };
    case SIGNOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
}

export default auth;
