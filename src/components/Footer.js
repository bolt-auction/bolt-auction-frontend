import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import { FaGithub } from 'react-icons/fa';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const FooterBlock = styled.footer`
  width: 100%;
  height: 122px;
  text-align: center;

  .bolt-auction {
    color: ${Colors.primary};
    font-size: 18px;
    font-weight: 700;
  }

  .description {
    font-size: 12px;
    color: #00000099;
    font-weight: 500;
  }

  .link {
    height: 122px;

    a {
      padding: 8px;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition: color 0.3s;
    }

    a:hover {
      color: ${Colors.primary};
      font-weight: 600;
    }
  }
`;

const FooterContainer = styled(Container)`
  max-width: 1024px;
  box-shadow: 0px 3px 4px -2px rgba(0, 0, 0, 0.2),
    0px 6px 5px 0 rgba(0, 0, 0, 0.14), 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
  background-color: ${Colors.surface};
`;

// const FlexBox = styled.div`
//   display: flex;
//   max-width: 1024px;
//   margin: 0 auto;
//   flex-direction: row;
//   align-items: center;
//   padding-top: 24px;
//   margin-bottom: 12px;
// `;

const developers = [
  { name: '김현수', github: 'https://github.com/hscom96' },
  { name: '김태연', github: 'https://github.com/ki1556ki' },
  { name: '박수빈', github: 'https://github.com/Sub2n' },
  { name: '신지섭', github: 'https://github.com/JiSop' },
];

const Footer = () => {
  return (
    <FooterBlock>
      <FooterContainer>
        <Row justify="space-between">
          <Col xs={0.8} sm={1.5} md={2} lg={2} align="center" justify="center">
            <a href="https://github.com/bolt-auction">
              <span className="bolt-auction">번개옥션</span>
              <p className="description">중고 경매 거래</p>
            </a>
          </Col>
          {developers
            .sort((a, b) => {
              return a.name - b.name;
            })
            .map(dev => (
              <Col
                className="link"
                key={dev.name}
                xs={0.8}
                sm={1.5}
                md={2}
                lg={2}
                align="center"
                justify="center"
              >
                <a href={dev.github}>
                  <FaGithub style={{ width: 30, height: 22 }} />
                  <span>{dev.name}</span>
                </a>
              </Col>
            ))}
        </Row>
      </FooterContainer>
    </FooterBlock>
  );
};

export default Footer;
