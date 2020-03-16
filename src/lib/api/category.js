import client from './client';

/**
 * 카테고리 받아오기
 */
export const getCategories = () => client.get(`/api/category`);

/**
 * 카테고리 아이템 조회
 * @param {number} id - 카테고리 아이디
 * @param {string} filter - 정렬 파라미터
 */
export const getCategoryItems = ({ id, filter }) =>
  client.get(`/api/item/category/${id}?sort=${filter}`);

/**
 * 아이템 검색
 * @param {string} keyword - 검색 키워드
 * @param {string} filter - 정렬 파라미터
 */
export const searchItem = ({ keyword, filter }) =>
  client.get(`/api/item?filter=name&keyword=${keyword}&sort=${filter}`);
