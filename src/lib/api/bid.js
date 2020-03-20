import client from './client';

/**
 * 해당 상품 아이디의 입찰 리스트 조회
 * @param {number} itemId - 상품 아이디
 */
export const getItemBidList = itemId => client.get(`/api/bid/${itemId}`);

/**
 * 해당 상품 아이디에 price의 입찰 등록
 * @param {number} itemId - 상품 아이디
 * @param {number} price - 입찰 가격
 */
export const postBid = (itemId, price) =>
  client.post(`/api/bid/${itemId}?price=${price}`);
