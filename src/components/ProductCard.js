import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Elevation from '../styles/Elevation';
import Colors from '../styles/Colors';
import Moment from 'react-moment';

const ProductCardBlock = styled.div`
  border-radius: 4px;
  margin-top: 24px;
  box-shadow: ${Elevation.z1};
  background-color: ${Colors.surface};

  .product-img {
    margin-bottom: 12px;

    img {
      border-radius: 4px 4px 0 0;
      display: block;
      min-width: 225px;
      min-height: 225px;
      object-fit: cover;
    }
  }

  .product-data {
    margin: 0 16px 12px 16px;
    display: flex;
    flex-direction: column;

    .product-title {
    }

    .auction-data {
      margin-top: auto;
      display: flex;
      justify-content: space-between;

      .limit-time {
        padding-top: 1em;
      }
    }
  }
`;

const ProductCard = ({ item }) => {
  return (
    <ProductCardBlock>
      <Link to={`/products/${item?.itemId}?owner=${item?.seller?.memberId}`}>
        <div className="product-img">
          <img
            src={`${
              item?.imagePath?.length > 0
                ? item?.imagePath[0]
                : 'https://www.yokogawa.com/public/img/default_image.png'
            }`}
            alt="이미지"
          />
        </div>
        <div className="product-data">
          <h5 className="product-title">{item.itemName}</h5>
          <div className="auction-data">
            <div className="price">
              <h6>현재 가격</h6>
              <h5>{item?.currentPrice}</h5>
            </div>
            <div className="limit-time">
              <h6>
                <Moment date={item?.endDt} tz="Asia/Seoul" fromNow /> 종료{' '}
              </h6>
              {/* {item?.endDt} */}
            </div>
          </div>
        </div>
      </Link>
    </ProductCardBlock>
  );
};

export default ProductCard;
