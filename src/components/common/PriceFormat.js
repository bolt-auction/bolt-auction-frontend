import React from 'react';

// NOTE: 정규표현식을 사용해서 변환해보자
/**
 * 전달받은 인자를 한국통화 포멧으로 반환
 * @param {object} props
 * @param {number} props.price - 가격
 * @example
 * <PriceFormat price="10000" />
 * @return {JSX.Element}
 * ```
 * <span>10,000원</span>
 * ```
 */
const PriceFormat = ({ price }) => {
  const krw = new Intl.NumberFormat('ko-KR').format(price);
  return <span>{krw}원</span>;
};

export default PriceFormat;
