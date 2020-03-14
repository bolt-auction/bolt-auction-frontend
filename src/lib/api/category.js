import client from './client';

// 카테고리 받아오기
export const getCategories = () => client.get(`/api/category`);

// 카테고리로 아이템 조회
export const getCategoryItems = ({ id, filter }) =>
  client.get(`/api/item/category/${id}?sort=${filter}`);

// 아이템 검색
export const searchItem = ({ keyword, filter }) =>
  client.get(`/api/item?filter=name&keyword=${keyword}&sort=${filter}`);
