/*
  API request를 함수화한 library
*/

// 원래 api요청이어야 하지만 우선 localStorage에 key를 통해서 id를 저장하고 삭제하는 코드를 작성함
// 추후 localStorage 관련 코드는 auth 모듈로 옮겨질 것임
export const setToken = (state, payload) => {
  console.log(state, payload);
  const user = state.users.find(
    user => user.email === payload.email && user.password === payload.password,
  );
  if (!user) return {};
  localStorage.setItem(state.authKey, user.email);
  return {
    data: {
      user,
      authenticated: true,
    },
  };
};

export const removeToken = (state, action) => {
  localStorage.removeItem(state.authKey);
  return {};
};
