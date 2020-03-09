import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import Colors from '../styles/Colors';

const CategoriesBlock = styled.div`
  .category,
  .sub-category {
    z-index: 1000;
    position: relative;
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

  .sub-category-list {
    position: absolute;
    display: none;
    left: 302px;
    top: 0;
    background-color: ${Colors.surface};
    border: solid 1px rgba(0, 0, 0, 0.12);
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2),
      0 16px 24px 0 rgba(0, 0, 0, 0.14);
  }

  .sub-category-list.open {
    display: block;
  }
`;

const Categories = ({
  menu,
  categories,
  getCategories,
  error,
  activeId,
  activateId,
  deactivateId,
  selectCategory,
}) => {
  useEffect(() => {
    if (categories?.length === 0) getCategories();
  }, [categories, categories.length, getCategories]);

  const onCategotyClick = (id, name) => {
    menu.current.style.display = 'none';
    selectCategory(id, name);
  };

  return (
    <CategoriesBlock>
      <ul>
        {!error
          ? categories?.supCategoryList?.map(cat => (
              <li
                className="category"
                key={cat.id}
                onMouseEnter={() => activateId(cat.id)}
                onMouseLeave={deactivateId}
              >
                <Link
                  to={`/categories/${cat.name}?order=popular`}
                  onClick={() => onCategotyClick(cat.id, cat.name)}
                >
                  <FaHeart
                    className="category-icon"
                    style={{
                      width: '20px',
                    }}
                  />
                  {cat.name}
                </Link>
                <ul
                  className={`sub-category-list ${
                    activeId !== null && activeId === cat.id ? 'open' : ''
                  }`}
                >
                  {cat.subCategoryList.map(subCat => (
                    <li className="sub-category" key={subCat.id}>
                      <Link
                        to={`/categories/${subCat.name}?order=popular`}
                        onClick={() => onCategotyClick(subCat.id, subCat.name)}
                      >
                        {subCat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          : '카테고리를 불러올 수 없습니다.'}
      </ul>
    </CategoriesBlock>
  );
};

export default React.memo(Categories);
