import React from 'react';
import qs from 'qs';
import { MainBox, NonMainConatiner, MainContainer, Divider } from './Main';
const ProductDetail = ({ match, location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { id } = match.params;
  const owner = query.owner;
  return (
    <MainBox>
      <NonMainConatiner>
        <h1 className="non-main-title">상품{id}의 상세 페이지</h1>
        <MainContainer>
          <h2>상품등록자 id: {owner}</h2>
          <Divider />
        </MainContainer>
      </NonMainConatiner>
    </MainBox>
  );
};

export default ProductDetail;
