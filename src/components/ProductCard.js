import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Elevation from '../styles/Elevation';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import Moment from 'react-moment';
import PriceFormat from './common/PriceFormat';
import { MdTimer, MdTimerOff } from 'react-icons/md';

const ProductCardBlock = styled.div`
  border-radius: 4px;
  margin-top: 24px;
  box-shadow: ${Elevation.z1};
  background-color: ${Colors.surface};
  min-width: 214px;
  max-width: 224px;
  position: relative;
  .product-img {
    margin-bottom: 12px;
    img {
      border-radius: 4px 4px 0 0;
      display: block;
      min-height: 224px;
      object-fit: cover;
      background-color: ${Colors.onSurfaceLow};
    }
    border-bottom: 0.5px solid #00000008;
  }
  .product-data {
    margin: 0 16px 12px 16px;
    display: flex;
    flex-direction: column;
    .product-title {
      ${Typography.Headline5};
      color: ${Colors.onSurfaceHigh};
      font-size: 0.9em;
      height: 1.5rem;
      max-width: 184px;
      margin-bottom: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .auction-data {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price {
        ${Typography.Overline};
        font-size: 0.75em;
        color: ${Colors.onSurfaceMedium};
        span {
          ${Typography.Headline6};
          color: ${Colors.onSurfaceHigh};
        }
      }
      .limit-time {
        width: 45%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        ${Typography.Caption};
        color: ${Colors.onSurfaceMedium};
        font-size: 0.75rem;
        padding-top: 1.75em;
      }
    }
  }
`;

const IsSellBlock = styled.div`
  position: absolute;
  background-color: #fafafa94;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.gray[8]};
  font-size: 1.25rem;
  backdrop-filter: blur(2px);
  svg {
    font-size: 2rem;
  }
`;

const ProductCard = ({ item }) => {
  return (
    <ProductCardBlock>
      <Link to={`/products/${item?.itemId}`}>
        {item?.end && (
          <IsSellBlock>
            <MdTimerOff />
            <p>종료된 경매</p>
          </IsSellBlock>
        )}
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
          <p className="product-title">{item.itemName}</p>
          <div className="auction-data">
            <div className="price">
              <p>현재 가격</p>
              <PriceFormat price={item?.currentPrice} />
            </div>
            <div className="limit-time">
              <MdTimer />
              <Moment date={item?.endDt} tz="Asia/Seoul" fromNow /> 종료
            </div>
          </div>
        </div>
      </Link>
    </ProductCardBlock>
  );
};

export default ProductCard;
