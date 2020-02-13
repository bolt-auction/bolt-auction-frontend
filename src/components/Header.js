import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-awesome-styled-grid';

import Categories from './Categories';

import Colors from '../styles/Colors';
import Elevation from '../styles/Elevation';
import Typography from '../styles/Typography';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import logo512 from '../imgs/logo512.png';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${Elevation.z4};
  background-color: ${Colors.surface};
`;

const MyStoreBox = styled.div`
  ${Typography.button};
  font-size: 0.75em;
`;

const LogoImg = styled.img`
  max-height: 72px;
  ${Typography.headline4};
  color: ${Colors.onSurfaceMedium};
  font-size: 2em;
`;

const Button = styled.button`
  font-size: 0.75em;
`;

const Search = styled.form`
  height: 48px;
  position: relative;

  & > input,
  & > input:focus {
    ${Typography.Subtitle1};
    color: ${Colors.onSurfaceMedium};
    height: 48px;
    width: 100%;
    padding: 5px 12px;
    border: 2px solid ${Colors.primary};
    border-radius: 5px;
  }
`;

const Sell = styled.button`
  min-height: 36px;
  min-width: 64px;
  border-radius: 28px;
  background-color: ${Colors.primary};
  color: #ffffff;

  & a {
    ${Typography.Button};
    color: ${Colors.surface};
    font-weight: 500;
    height: 16px;
    width: 64px;
  }
`;

const CategoryBox = styled.div`
  ${Typography.button};
  color: ${Colors.onSurfaceMedium};
  display: flex;
  align-items: center;
  max-width: 107px;
  height: 24px;
  cursor: pointer;

  &:hover > span {
    color: ${Colors.primary};
  }
`;

const Icon = styled.span`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;

// const Menu = styled.div`
//   width: 304px;
//   height: 529px;
//   display: none;
//   box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 16px 24px 0 rgba(0, 0, 0, 0.14);
//   border: solid 1px rgba(0, 0, 0, 0.12);
//   background-color: #ffffff;
// `;

const Header = withRouter(({ history, signout }) => {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const $menu = useRef(null);

  const onChange = () => {
    setValue(ref.current.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!value.length) return;
    history.push(`/search?item=${value}`);
  };

  return (
    <NavContainer>
      <Container style={{ width: 1024 }}>
        <Row debug style={{ height: 72 }} justify="space-between">
          <Hidden xs>
            <Col debug sm={1} md={2} lg={2} align="center" justify="center">
              <Link to="/">
                <LogoImg src={logo512} alt="번개옥션" />
              </Link>
            </Col>
          </Hidden>
          <Col debug xs={3} sm={4} md={6} lg={6} justify="center">
            <Search onSubmit={onSubmit}>
              <input
                ref={ref}
                onChange={onChange}
                placeholder="상품명으로 검색해보세요."
              />
              <IconContext.Provider
                value={{
                  style: {
                    position: 'absolute',
                    color: Colors.primary,
                    right: '12px',
                    top: '24px',
                    transform: 'translateY(-50%)',
                  },
                }}
              >
                <GoSearch />
              </IconContext.Provider>
            </Search>
          </Col>
          <Col debug xs={1} sm={1} md={2} lg={2} justify="center">
            <Sell>
              <Link to="/sell">판매하기</Link>
            </Sell>
          </Col>
        </Row>
        <Row debug style={{ height: 36 }}>
          <Col debug noGutter md={2} justify="center" align="center">
            <CategoryBox
            // onMouseOver={() => {
            //   $menu.current.style.display = 'block';
            // }}
            // onMouseLeave={() => {
            //   $menu.current.style.display = 'none';
            // }}
            >
              <Icon>
                <FiMenu />
              </Icon>
              <span>카테고리</span>
              {/* <Menu ref={$menu}>
                <Categories menu={$menu} />
              </Menu> */}
            </CategoryBox>
          </Col>
          <Col debug md={1} offset={{ md: 5 }} align="flex-end">
            채팅
          </Col>
          <Col debug md={1} align="flex-end">
            알람
          </Col>
          <Col debug md={1} align="flex-end">
            <MyStoreBox>
              <Link to="/store/0">수빈 상점</Link>
            </MyStoreBox>
          </Col>
          <Col debug md={1} align="flex-end">
            <MyStoreBox>
              <Link to="/store/1">지섭 상점</Link>
            </MyStoreBox>
          </Col>
          <Col debug md={1} align="center">
            <Button onClick={signout}>로그아웃</Button>
          </Col>
        </Row>
      </Container>
    </NavContainer>
  );
});

export default Header;
