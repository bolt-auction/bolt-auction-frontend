/*
  API request를 함수화한 library
*/
import axios from 'axios';

// .env.development에 저장된 BASE URL(REACT_APP_URL)
// CORS 문제를 해결하기 위해서 package.json의 proxy 사용
// const apiUrl = process.env.REACT_APP_URL;

// const token = `Bearer ${localStorage.token}`;
// axios.defaults.headers.common['Authorization'] = token;

// 로그인
export const signin = ({ uid, passwd }) =>
  axios.post('/api/auth/login', { uid, passwd });

// 회원가입
export const signup = ({ uid, passwd, name }) =>
  axios.post('/api/member', { uid, passwd, name });

// 회원정보 조회
export const check = () =>
  axios.get('/api/member', {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

// 카테고리 받아오기
export const getCategories = () => axios.get(`/api/category`);

// 카테고리로 아이템 조회
export const getCategoryItems = id => axios.get(`/api/item/category/${id}`);
