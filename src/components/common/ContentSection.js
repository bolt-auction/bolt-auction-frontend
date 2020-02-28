import React from 'react';
import styled from 'styled-components';
import Elevation from '../../styles/Elevation';

const ContentSectionBlock = styled.section`
  margin: 1rem auto 0;
  padding: 24px;
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
`;

const ContentSection = ({ children, title }) => {
  return (
    <>
      {title ? (
        <Title>
          <h1>{title}</h1>
        </Title>
      ) : (
        ''
      )}
      <ContentSectionBlock>{children}</ContentSectionBlock>
    </>
  );
};

export default ContentSection;
