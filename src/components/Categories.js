import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const categories = ['패션잡화', '여성의류', '남성의류'];

const Category = styled.li`
  padding: 10px;
  height: 36px;
  text-align: left;

  & a {
    display: flex;
    align-items: center;
  }
`;

const Categories = ({ menu }) => {
  return (
    <>
      <ul>
        {categories.map((cat, i) => (
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
        ))}
      </ul>
    </>
  );
};

export default Categories;
