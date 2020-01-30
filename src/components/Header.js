import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.div`
  background: pink;
  display: flex;
  justify-content: space-around;
`;

const Header = withRouter(({ history }) => {
  const [value, setValue] = useState('');
  const ref = useRef(null);

  const onChange = () => {
    setValue(ref.current.value);
  };
  const onSubmit = () => {
    history.push(`/search?item=${value}`);
  };
  return (
    <HeaderBox>
      <form onSubmit={onSubmit}>
        <input ref={ref} onChange={onChange} placeholder="검색입력" />
        <button>검색</button>
      </form>
      <Link to="/sell">상품 등록</Link>
      <div>
        <Link to="/store/0">수빈 상점</Link>{' '}
        <Link to="/store/1">지섭 상점</Link>
      </div>
    </HeaderBox>
  );
});

export default Header;
