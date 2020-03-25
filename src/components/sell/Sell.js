import React from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';

import Button from '../common/Button';
import ContentSection from '../common/ContentSection';
import Divider from '../common/Divider';
import SellForm from './SellForm';
import ImageUpLoader from './ImageUpLoader';

/*
 * TODO:
 *  []업로드, 미리보기 컴포넌트 작성
 */
const Sell = ({
  sellForm,
  categoryList,
  onChange,
  onChangeFile,
  onSubmit,
  imgBase64,
  onRemoveImage,
}) => {
  const {
    supCategoryId,
    categoryId,
    name,
    quickPrice,
    startPrice,
    minBidPrice,
    description,
    endDt,
    images,
  } = sellForm;
  return (
    <ContentSection title="판매하기">
      <Container style={{ padding: '4rem' }}>
        <Row>
          <Col>
            <h3>이미지 등록 {images.length} / 4</h3>
          </Col>
        </Row>
        <form onSubmit={onSubmit}>
          <ImageUpLoader
            images={images}
            imgBase64={imgBase64}
            onChangeFile={onChangeFile}
            onRemoveImage={onRemoveImage}
          />
          <Divider margin="2rem" />
          <SellForm
            categoryList={categoryList}
            supCategoryId={supCategoryId}
            categoryId={categoryId}
            name={name}
            quickPrice={quickPrice}
            startPrice={startPrice}
            minBidPrice={minBidPrice}
            description={description}
            endDt={endDt}
            onChange={onChange}
          />
          <Divider thick="1px" />
          <Row>
            <Col>
              <Button to="/">취소</Button>
            </Col>
            <Col>
              <Button primary>등록</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </ContentSection>
  );
};

export default Sell;
