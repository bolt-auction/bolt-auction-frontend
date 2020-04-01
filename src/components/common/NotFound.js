import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';
import Colors from '../../styles/Colors';
import gingerCatSearch from '../../lib/images/gingerCatSearch.png';

const NotFoundBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 86vh;
  width: 100%;
  color: ${Colors.onSurfaceHigh};
  background-color: ${Colors.surface};
  img {
    width: 50vh;
    min-width: 320px;
  }
`;

const NotFound = ({ pathName }) => {
  return (
    <ContentSection>
      <NotFoundBlock>
        <h1>404 Not Found</h1>
        <img alt="NotFound" src={gingerCatSearch} />
        <h3>{pathName} 페이지를 찾을 수 없습니다.</h3>
      </NotFoundBlock>
    </ContentSection>
  );
};

export default NotFound;
