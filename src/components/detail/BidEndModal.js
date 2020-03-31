import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Modal from '../common/Modal';
import PriceFormat from '../common/PriceFormat';
import Typography from '../../styles/Typography';
import Colors from '../../styles/Colors';
import twoCats from '../../imgs/ginger-cat-745.png';
import failCat from '../../imgs/ginger-cat-754.png';
import waitingCat from '../../imgs/ginger-cat-757.png';

const BidEndModalBlock = styled.div`
  justify-content: space-evenly;
  height: 100%;
  &,
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    color: ${Colors.onSurfaceHigh};
    img {
      width: 75%;
      margin-bottom: 2rem;
    }
    b {
      ${Typography.Headline6};
    }
    p {
      ${Typography.Subtitle2};
    }
  }
`;

/**
 * 상품의 낙찰상태에 따라 Scrim 렌더링
 * (경매가 종료됐을 때만 렌더링되어야 한다.)
 * @param {object} props
 * @param {boolean} props.ownProduct - 해당 상품의 판매자인지 구분
 * @param {object} [props.auctioned] - 상품의 낙찰 상태
 * @param {function} props.onChatRoomCreate - 상품의 낙찰자와 대화방 생성
 * @param {function} props.onRemoveProduct - 상품 삭제
 */
const BidEndModal = ({
  ownProduct,
  auctioned,
  itemName,
  onChatRoomCreate,
  onRemoveProduct,
}) => {
  return (
    <Modal title="경매 종료">
      <BidEndModalBlock>
        {ownProduct && auctioned ? (
          auctioned.response && auctioned.response.status === 404 ? (
            <>
              <div className="text">
                <img alt="X키를 눌러 조의를 표하십시오." src={failCat} />
                <b>상품이 낙찰되지 못했습니다.</b>
                <p>다시 등록해보세요!</p>
              </div>
              <Button primary fullWidth onClick={onRemoveProduct}>
                상품 삭제하기
              </Button>
            </>
          ) : (
            <>
              <div className="text">
                <b>{itemName}</b>
                <p>
                  낙찰가: <PriceFormat price={auctioned.price} />
                </p>
                <img alt="귀여운 고양이가 두 마리" src={twoCats} />
                <b>상품이 성공적으로 낙찰되었습니다.</b>
                <p>구매자와 대화하여 거래를 마무리하세요!</p>
              </div>
              <Button primary fullWidth onClick={onChatRoomCreate}>
                구매자와 대화방 생성
              </Button>
              <Button to="/">메인으로 돌아가기</Button>
            </>
          )
        ) : (
          <>
            <div className="text">
              <img alt="경매가 끝나서 화난 고양이" src={waitingCat} />
              <b>종료된 경매입니다.</b>
              <p>다른 상품을 찾아보세요!</p>
            </div>
            <Button primary fullWidth to="/">
              메인으로 돌아가기
            </Button>
          </>
        )}
      </BidEndModalBlock>
    </Modal>
  );
};

export default BidEndModal;
