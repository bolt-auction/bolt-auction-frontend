import React from 'react';
import qs from 'qs';

const ProductDetail = ({ match, location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const { id } = match.params;
  const owner = query.owner;
  return (
    <div>
      <h1>상품{id}의 상세 페이지</h1>
      <h2>상품등록자 id: {owner}</h2>
    </div>
  );
};

export default ProductDetail;
