import styled from 'styled-components';
import Colors from './Colors';
import Typography from './Typography';

// 페이지 제목
// ex) 내 상점, 판매하기, 검색 결과 등
export const Title = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 100px;
  padding-left: 16px;

  & h3 {
    padding-top: 14px;
    ${Typography.headline3};
    line-height: inherit;
  }
`;

// ProductList를 담는 Contents box
export const ContentsBox = styled.section`
  margin: 0 auto;
  padding: 24px;
  max-width: 1024px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);

  & h2 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: ${Colors.primary};
    margin-bottom: 12px;
  }
`;

// ContentsBox 내부의 Divider
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(33, 33, 33, 0.08);
`;

// 채팅, 알림 등의 PopUp Container
export const PopUp = styled.div`
  height: 200px;
`;