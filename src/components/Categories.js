import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import Colors from '../styles/Colors';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

const CategoriesBlock = styled.div`
  .category {
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

    a:hover {
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
      <Container style={{ padding: 0, width: 1024 }}>
        <ScreenBadge />
        <Row debug>
          {!error
            ? categories?.supCategoryList?.map(cat => (
                <Col
                  debug
                  key={cat.id}
                  xs={2}
                  sm={4}
                  md={3}
                  lg={3}
                  align="center"
                  justify="start"
                >
                  <div>
                    <FaHeart
                      style={{
                        color: `${Colors.primary}`,
                        marginRight: '10px',
                      }}
                    />
                    <Link
                      to={`/categories/${cat.name}`}
                      onClick={() => (menu.current.style.display = 'none')}
                    >
                      <b>{cat.name}</b>
                    </Link>
                  </div>
                  <ul>
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
                  </ul>
                </Col>
              ))
            : '카테고리를 불러올 수 없습니다.'}
        </Row>
      </Container>
    </CategoriesBlock>
  );
};

export default Categories;
