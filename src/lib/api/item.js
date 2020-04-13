import client from './client';

/**
 * 해당 아이디의 상품정보 조회
 * @param {number} itemId - 상품 아이디
 */
export const getItemDetail = itemId => client.get(`/api/item/${itemId}`);

/**
 * 상품등록 (authorization)
 */
export const uploadProduct = ({
  categoryId,
  name,
  startPrice,
  quickPrice,
  minBidPrice,
  description,
  endDt,
  images,
}) => {
  const formData = new FormData();
  formData.append('categoryId', categoryId);
  formData.append('name', name);
  formData.append('startPrice', startPrice);
  formData.append('quickPrice', quickPrice);
  formData.append('minBidPrice', minBidPrice);
  formData.append('description', description);
  formData.append('endDt', endDt);
  images.forEach(image => formData.append('images', image));
  return client.post(`/api/item/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/**
 * 해당 아이디의 상품 삭제
 * @param {number} itemId - 상품 아이디
 */
export const deleteItem = itemId => client.delete(`/api/item/${itemId}`);
