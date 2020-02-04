import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
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
  position: relative;

  & > input {
    width: 100%;
    height: 48px;
    padding: 5px 12px;
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

  background-color: #6200ee;
  color: #fff;
  & svg {
    margin-right: 5px;
  }

  & a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
  const onSubmit = e => {
    e.preventDefault();
    if (!value.length) return;
    history.push(`/search?item=${value}`);
  };
  return (
    <HeaderBox>
      <FirstBox>
        <LOGO>LOGO</LOGO>
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
          <Link to="/sell">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              style={{ fill: `#000000` }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: 'normal' }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path d="M91.62136,11.41068c-1.48951,0.04438 -2.90324,0.6669 -3.94167,1.73568l-34.4,34.4c-1.49776,1.43802 -2.10108,3.57339 -1.5773,5.58258c0.52378,2.00919 2.09283,3.57823 4.10201,4.10201c2.00919,0.52378 4.14456,-0.07954 5.58258,-1.5773l34.4,-34.4c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08576,-3.56638 -5.44951,-3.49667zM103.2,28.66667c-1.53699,0.00016 -3.00955,0.61742 -4.08724,1.71328l-28.43151,28.45391c-1.1945,1.08355 -1.8774,2.62008 -1.88125,4.23281c-0.00177,1.69226 0.74415,3.29887 2.03802,4.38958l33.99687,34.01927c1.07855,1.10275 2.55594,1.72438 4.09844,1.72448c1.52598,-0.00022 2.98891,-0.60877 4.06484,-1.69089l28.59948,-28.59948c1.10964,-1.07938 1.73565,-2.56161 1.73567,-4.10964c-0.00016,-1.53699 -0.61742,-3.00955 -1.71328,-4.08724l-34.31042,-34.31041c-0.02221,-0.02258 -0.04461,-0.04498 -0.06719,-0.06719c-1.07411,-1.06842 -2.52744,-1.66827 -4.04245,-1.66849zM154.68802,74.47734c-1.48951,0.04438 -2.90324,0.66691 -3.94167,1.73568l-34.4,34.4c-1.49778,1.43802 -2.10113,3.5734 -1.57735,5.5826c0.52378,2.0092 2.09284,3.57826 4.10204,4.10204c2.0092,0.52378 4.14458,-0.07957 5.5826,-1.57735l34.4,-34.4c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08576,-3.56638 -5.44952,-3.49667zM76.21302,87.67969l-54.58985,46.61692c-2.78774,2.17004 -4.41957,5.50394 -4.42318,9.03672c0,6.33287 5.1338,11.46667 11.46667,11.46667c3.46111,-0.00048 6.73683,-1.56426 8.91354,-4.25521c0.01875,-0.02232 0.03741,-0.04472 0.05599,-0.06718l0.0112,-0.0112l46.67292,-54.67943z"></path>
                </g>
              </g>
            </svg>
            판매하기
          </Link>
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
          }}
        >
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
