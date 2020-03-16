import client from './client';

/**
 * 상점 정보 불러오기
 * @param {number} id - 상점주 id
 */
export const getStoreInfo = id => client.get(`/api/store/${id}`);

/**
 * 상점에 등록된 상품 불러오기
 * @param {number} id - 상점주 id
 */
export const getStoreProducts = id => client.get(`/api/item/store/${id}`);

/**
 * 상점에 등록된 리뷰 불러오기
 * @param {number} id - 상점주 id
 */
export const getStoreReviews = id => client.get(`/api/review/store/${id}`);

/**
 * 상점 리뷰 등록하기
 * @param {number} id - 상점주 id
 * @param {string} content - 리뷰 내용
 */
export const postStoreReview = ({ id, content }) =>
  client.post(`/api/review/store/${id}`, content, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

// // 상점 리뷰 삭제하기 ?? 리뷰를 다 삭제한다는 거임?
// export const deleteStoreReview = id => client.delete(`/api/review/store/${id}`);

/**
 * 상점 정보 수정
 * @param {string} name - 상점 이름
 * @param {string} desc - 상점 설명
 * @param {file} file - 상점 프로필 이미지
 */
export const putStoreInfo = ({ name, desc, file }) => {
  const formData = new FormData();
  formData.append('description', desc);
  formData.append('image', file);
  formData.append('memberName', name);
  return client.put(`/api/store`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
