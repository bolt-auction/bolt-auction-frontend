import React from 'react';
import styled from 'styled-components';
import Elevation from '../../styles/Elevation';
import Colors from '../../styles/Colors';

const ContentSectionBlock = styled.section`
  margin: 1rem auto 0;
  padding-top: 1.5rem;
  max-width: 1024px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: ${Elevation.z4};
`;

const Title = styled.div`
  margin: 1rem auto 0;
  max-width: 1024px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 16px;

  & h1 {
    width: 375px;
    font-size: 48px;
    line-height: 48px;
    color: ${Colors.onSurfaceHigh};
  }

  & h2 {
    color: ${Colors.primary};
  }
`;

const textMap = {
  category: '의 추천 상품',
  search: '의 검색 결과입니다.',
};

const ContentSection = ({ type, title, children }) => {
  const text = textMap[type];
  return (
    <>
      {title && (
        <Title>
          {type === 'category' && <h1>{title}</h1>}
          <h2>
            {title}
            {text}
          </h2>
        </Title>
      )}
      <ContentSectionBlock>{children}</ContentSectionBlock>
    </>
  );
};

export default ContentSection;
