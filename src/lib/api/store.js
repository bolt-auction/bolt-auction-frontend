import client from './client';

// 상점 id로 상점 정보 불러오기
export const getStoreInfo = id => client.get(`/api/store/${id}`);

// 상점 id로 상점에 등록된 상품 불러오기
export const getStoreProducts = id => client.get(`/api/item/store/${id}`);

// 상점 id로 상점에 등록된 리뷰 불러오기
export const getStoreReviews = id => client.get(`/api/review/store/${id}`);

// 상점 리뷰 등록하기 (accessToken 필요, request body로 content 필요)
export const postStoreReview = ({ id, content }) =>
  client.post(`/api/review/store/${id}`, content, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

// 상점 리뷰 삭제하기 ?? 리뷰를 다 삭제한다는 거임?
export const deleteStoreReview = id => client.delete(`/api/review/store/${id}`);

// FIXME : parameter가 아니고 request body로 수정해야함 name도 수정할수있어야함
// 상점 정보 수정
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
