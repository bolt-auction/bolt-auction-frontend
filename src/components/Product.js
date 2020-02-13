import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductBox = styled.div`
  height: 288px;
  border-radius: 4px;
  margin-top: 24px;
  margin-right: 24px;

  & > img {
    height: 192px;
  }
  & .product-data {
    margin: 12px 16px;
  }
  & h5.product-title {
    height: 24px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.18px;
    color: rgba(0, 0, 0, 0.87);
  }
  & .price {
    height: 16px;
    font-family: Roboto;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
  }
  a:last-child > & {
    margin-right: 0px;
  }
  & h6 {
    height: 24px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Product = ({ id, owner }) => {
  return (
    <Link to={`/products/${id}?owner=${owner}`}>
      <ProductBox>
        <img
          src="https://www.yokogawa.com/public/img/default_image.png"
          alt="이미지"
        />
        <div className="product-data">
          <h5 className="product-title">상품 타이틀</h5>
          <span className="price">현재 가격</span>
          <h6>10,000원</h6>
        </div>
      </ProductBox>
    </Link>
  );
};

export default Product;
