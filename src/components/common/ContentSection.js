import React from 'react';
import styled from 'styled-components';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import Elevation from '../../styles/Elevation';

/**
 * NOTE:
 * ContentSectionBlock을 react-awesome-styled-grid의 Container로 확장해서 사용하려 했으나
 * 다시 생각해보니 너무 의존성이 생기는것 같아 하지 않았다. 시간이 있을때 다시한번 고려해보기
 */

const ContentSectionBlock = styled.section`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: ${Elevation.z4};
  margin: 1rem auto 0;
  max-width: 1024px;
  padding-top: 1.5rem;
  background-color: ${Colors.surface};
`;

const Title = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  margin: 1rem auto 0;
  max-width: 1024px;
  padding-left: 16px;
  & h1 {
    width: 375px;
    color: ${Colors.onSurfaceHigh};
    ${Typography.Headline3};
    /* font-size: 48px; */
    /* line-height: 48px; */
  }
  & h2 {
    color: ${Colors.primary};
  }
`;

const textMap = {
  category: '의 추천 상품',
  search: '의 검색 결과입니다.',
};

/**
 * 메인 콘텐츠가 위치하는 영역을 랜더링합니다.
 * @param {object} props
 * @param {string} [props.title] - Title을 전달되는 값으로 랜더링합니다.
 * @param {string} [props.type] - "category" | "search"
 * @param {*} props.children
 */
const ContentSection = ({ title, type, children }) => {
  const text = textMap[type];
  return (
    <>
      {title && (
        <Title>
          {type === 'category' && <h1>{title}</h1>}
          <h1>
            {title}
            {text}
          </h1>
        </Title>
      )}
      <ContentSectionBlock>{children}</ContentSectionBlock>
    </>
  );
};

export default ContentSection;
