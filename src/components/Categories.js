import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import Colors from '../styles/Colors';

const CategoriesBlock = styled.div`
  .category {
    width: 302px;
    padding: 8px 16px;
    text-align: left;
    color: ${Colors.onSurfaceMedium};
    .category-icon {
      width: 24px;
      height: 24px;
      padding: 2px;
      margin-right: 16px;
      color: inherit;
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

const Categories = ({ menu, categories, getCategories, error }) => {
  useEffect(() => {
    // console.log(getCategories);
    getCategories();
  }, [getCategories]);
  return (
    <CategoriesBlock>
      <ul>
        {!error
          ? categories?.supCategoryList?.map(cat => (
              <li className="category" key={cat.id}>
                <Link
                  to={`/categories/${cat.name}`}
                  onClick={() => (menu.current.style.display = 'none')}
                >
                  <FaHeart
                    className="category-icon"
                    style={{
                      width: '20px',
                    }}
                  />
                  {cat.name}
                </Link>
                {/* <ul>
                  {cat.subCategoryList?.map(subCat => (
                    <li key={subCat.id}>
                      <Link
                        to={`/categories/${subCat.name}`}
                        onClick={() => (menu.current.style.display = 'none')}
                      >
                        {subCat.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </li>
            ))
          : '카테고리를 불러올 수 없습니다.'}
      </ul>
    </CategoriesBlock>
  );
};

export default Categories;
