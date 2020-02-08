import React from 'react';
import { FirstBox } from './Header';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const FooterBox = styled.div`
  width: 100%;
  height: 122px;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid ${Colors.primary};
`;

const FlexBox = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
  margin-bottom: 12px;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FlexBox>
        <a
          href="https://github.com/Sub2n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subin Github
        </a>
        <a
          href="https://github.com/Sub2n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subin
        </a>
        FOOTER임
      </FlexBox>
    </FooterBox>
  );
};

export default Footer;
