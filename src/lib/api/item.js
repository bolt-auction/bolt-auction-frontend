import client from './client';
import qs from 'qs';

/**
 * 해당 상품아이디의 정보조회
 * @param {number} itemId - 상품 아이디
 */
export const productDetail = itemId => client.get(`/api/item/${itemId}`);

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
  const sellFormQueryString = qs.stringify({
    categoryId,
    name,
    startPrice,
    quickPrice,
    minBidPrice,
    description,
    endDt,
    images,
  });
  return client.post(`/api/item/`, sellFormQueryString, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
