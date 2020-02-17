import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const categories = ['패션잡화', '여성의류', '남성의류'];

const CategoriesBlock = styled.div`
  .category {
    width: 302px;
    padding: 8px 16px;
    text-align: left;

    .category-icon {
      width: 24px;
      height: 24px;
      padding: 2px;
      color: ${Colors.onSurfaceMedium};
      margin-right: 16px;
    }

    a {
      display: flex;
      align-items: center;
    }

    :hover {
      background-color: ${Colors.primarySelect};
      color: ${Colors.primary};
      .category-icon {
        color: inherit;
      }
    }
  }
`;

const Categories = ({ menu }) => {
  return (
    <CategoriesBlock>
      <ul>
        {categories.map((cat, i) => (
          <li className="category" key={i}>
            <Link
              to={`/categories/${cat}`}
              onClick={() => (menu.current.style.display = 'none')}
            >
              <FaHeart
                className="category-icon"
                style={{
                  width: '20px',
                }}
              />
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </CategoriesBlock>
  );
};

export default Categories;
