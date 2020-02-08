import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import styled from 'styled-components';
import Categories from './Categories';
import Logo from '../imgs/번개옥션.png';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const HeaderBox = styled.div`
  width: 100%;
  height: 122px;
  position: fixed;
  top: 0;
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
  align-items: center;
  padding-top: 24px;
  margin-bottom: 12px;
`;

const LOGO = styled.img`
  height: 50px;
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

  position: relative;

  & > input,
  & > input:focus {
    ${Typography.Subtitle1};
    width: 100%;
    height: 48px;
    padding: 5px 12px;
    border: 2px solid ${Colors.primary};
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const Sell = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 28px;
  background-color: ${Colors.primary};
  color: #fff;

  & a {
    ${Typography.Button};
    font-weight: 500;
    width: 64px;
    height: 16px;
    color: ${Colors.surface};
  }
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
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
    width: 150px;
    height: 36px;
    text-align: left;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.15px;
    padding: 5px 10px;
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover > span {
    color: ${Colors.primary};
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
  const onSubmit = e => {
    e.preventDefault();
    if (!value.length) return;
    history.push(`/search?item=${value}`);
  };
  return (
    <HeaderBox>
      <FirstBox>
        <Link to="/">
          <LOGO src={Logo} alt="번개옥션" />
        </Link>
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
        <Sell>
          <Link to="/sell">판매하기</Link>
        </Sell>
      </FirstBox>
      <SecondBox>
        <CategoryBox
          onMouseOver={() => {
            $menu.current.style.display = 'block';
          }}
          onMouseLeave={() => {
            $menu.current.style.display = 'none';
          }}
        >
          <span>
            <IconContext.Provider
              value={{
                style: {
                  marginRight: '10px',
                },
              }}
            >
              <FiMenu />
            </IconContext.Provider>
            카테고리
          </span>
          <Menu ref={$menu}>
            <Categories menu={$menu} />
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
