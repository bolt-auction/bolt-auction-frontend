/*
  API request를 함수화한 library
*/
import axios from 'axios';

// .env.development에 저장된 BASE URL(REACT_APP_URL)
// CORS 문제를 해결하기 위해서 package.json의 proxy 사용
// const apiUrl = process.env.REACT_APP_URL;

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

// 카테고리 받아오기
export const getCategories = () => axios.get(`/api/category`);

// 카테고리로 아이템 조회
export const getCategoryItems = id => axios.get(`/api/category/${id}`);
