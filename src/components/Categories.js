import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const Category = styled.li`
  padding: 10px;
  height: 36px;
  text-align: left;

  & a {
    display: flex;
    align-items: center;
  }
`;

const Categories = ({ menu, categories, getCategories, error }) => {
  useEffect(() => {
    // console.log(getCategories);
    getCategories();
  }, [getCategories]);
  return (
    <>
      <ul>
        {!error
          ? categories?.map((cat, i) => (
              <Category key={i}>
                <Link
                  to={`/categories/${cat}`}
                  onClick={() => (menu.current.style.display = 'none')}
                >
                  <FaHeart
                    style={{
                      height: '36px',
                      color: `${Colors.primary}`,
                      marginRight: '10px',
                    }}
                  />
                  {cat}
                </Link>
              </Category>
            ))
          : '카테고리를 불러올 수 없습니다.'}
      </ul>
    </>
  );
};

export default Categories;
