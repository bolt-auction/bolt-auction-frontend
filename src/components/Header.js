import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Categories from './Categories';

const HeaderBox = styled.div`
  width: 100%;
  height: 120px;
  position: fixed;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);
  text-align: center;
  background-color: #ffffff;
`;

const FirstBox = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 12px;
`;

const LOGO = styled.span`
  height: 48px;
  font-family: Roboto;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.6);
`;

const Search = styled.form`
  width: 603px;
  height: 48px;
  border-color: #5600e8;

  & > input {
    width: 315px;
    height: 48px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const Sell = styled.button`
  width: 116px;
  height: 48px;
  border-radius: 23px;
`;

const SecondBox = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    height: 24px;
    text-align: left;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 12px;
  }
`;

const Menu = styled.div`
  width: 304px;
  height: 529px;
  display: none;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 16px 24px 0 rgba(0, 0, 0, 0.14);
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
`;

const Header = withRouter(({ history }) => {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const $menu = useRef(null);

  const onChange = () => {
    setValue(ref.current.value);
  };
  const onSubmit = () => {
    history.push(`/search?item=${value}`);
  };
  return (
    <HeaderBox>
      <FirstBox>
        <LOGO>LOGO</LOGO>
        <Search onSubmit={onSubmit}>
          <input ref={ref} onChange={onChange} placeholder="검색입력" />
          <button>검색</button>
        </Search>
        <Sell>
          <Link to="/sell">상품 등록</Link>
        </Sell>
      </FirstBox>
      <SecondBox>
        <CategoryBox
          onMouseOver={() => {
            console.log($menu);
            $menu.current.style.display = 'block';
          }}
          onMouseLeave={() => {
            $menu.current.style.display = 'none';
          }}>
          <span>카테고리</span>
          <Menu ref={$menu}>
            <Categories />
          </Menu>
        </CategoryBox>
        <div>
          <Link to="/store/0">수빈 상점</Link>{' '}
          <Link to="/store/1">지섭 상점</Link>
        </div>
      </SecondBox>
    </HeaderBox>
  );
});

export default Header;
