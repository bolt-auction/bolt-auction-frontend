import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import Colors from '../styles/Colors';
import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';

const CategoriesBlock = styled.div`
  max-width: 1024px;

  width: ${props => props.width};

  .sup-category {
    padding: 8px 0;
    text-align: left;
    color: ${Colors.onSurfaceMedium};

    .category-icon {
      width: 24px;
      height: 24px;
      padding: 2px;
      margin-right: 16px;
      color: inherit;
    }
  }
  a:hover {
    background-color: ${Colors.primarySelect};
    color: ${Colors.primary};
    .category-icon {
      color: inherit;
    }
  }
`;

const Categories = ({ menu, width, categories, getCategories, error }) => {
  // 카테고리 불러와서 표시
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <CategoriesBlock width={`${width}px`}>
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
      {/*<Container style={{ padding: 0 }}>
        <ScreenBadge />
        <Row>
          {!error
            ? categories?.supCategoryList?.map(cat => (
                <Col key={cat.id} xs={2} sm={2} md={3} lg={3} align="center">
                  <Container style={{ padding: '8px 16px' }}>
                    <Row className="sup-category">
                      <Col>
                        {/* <FaHeart
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
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <ul className="sub-category-list">
                          {cat.subCategoryList?.map(subCat => (
                            <li key={subCat.id} className="sub-category">
                              <Link
                                to={`/categories/${subCat.name}`}
                                onClick={() =>
                                  (menu.current.style.display = 'none')
                                }
                              >
                                {subCat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              ))
             : '카테고리를 불러올 수 없습니다.'}
        </Row>
      </Container>*/}
    </CategoriesBlock>
  );
};

export default Categories;
