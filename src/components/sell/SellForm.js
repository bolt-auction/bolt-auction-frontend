import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-awesome-styled-grid';

import Select from '../common/Select';
import TextField from '../common/TextField';

/*
 * FIXME:
 *  []경매 진행기간 선택 캘린더(피커)로 전환 (현재 일로부터 최대 일주일)
 * NOTE:
 *  - 캘린더 피커로 전환시 모바일 페이지에서는 네이티브가 사용자 경험이 좋다는것 고려하기
 */

const RowWithMarginTop = styled(Row)`
  margin-top: 1rem;
`;

const ColWithMarginTop = styled(Col)`
  margin-top: 1rem;
`;

const SellForm = ({
  categoryList,
  supCategoryId,
  categoryId,
  name,
  quickPrice,
  startPrice,
  minBidPrice,
  description,
  endDt,
  onChange,
}) => {
  return (
    <>
      <RowWithMarginTop>
        <Col xs="2" sm="2" md="3">
          <Select
            name="supCategoryId"
            onChange={onChange}
            value={supCategoryId}
          >
            <option value="">카테고리</option>
            {categoryList &&
              categoryList.map((cat, i) => (
                <option key={cat.id} value={i}>
                  {cat.name}
                </option>
              ))}
          </Select>
        </Col>
        <Col xs="2" sm="2" md="3">
          <Select name="categoryId" onChange={onChange} value={categoryId}>
            <option value="">세부 카테고리</option>
            {supCategoryId &&
              categoryList[supCategoryId].subCategoryList.map(subCat => (
                <option key={subCat.id} value={subCat.id}>
                  {subCat.name}
                </option>
              ))}
          </Select>
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col md="12">
          <TextField
            name="name"
            autoComplete="name"
            placeholder="상품명"
            type="text"
            maxLength="64"
            onChange={onChange}
            value={name}
            required
          />
        </Col>
      </RowWithMarginTop>
      <Row>
        <ColWithMarginTop xs="4" sm="4" md="3" lg="3">
          <TextField
            name="quickPrice"
            autoComplete="quickPrice"
            placeholder="즉시 구매가"
            type="number"
            onChange={onChange}
            value={quickPrice}
            icon="won"
            min="100"
            step="100"
            required
          />
        </ColWithMarginTop>
        <ColWithMarginTop xs="4" sm="4" md="3" lg="3">
          <TextField
            name="startPrice"
            autoComplete="startPrice"
            placeholder="경매 시작가"
            type="number"
            onChange={onChange}
            value={startPrice}
            icon="won"
            min="100"
            step="100"
            required
          />
        </ColWithMarginTop>
        <ColWithMarginTop xs="4" sm="4" md="3" lg="3">
          <Select name="minBidPrice" onChange={onChange} value={minBidPrice}>
            <option value="">입찰단위</option>
            <option value="100">100원</option>
            <option value="1000">1,000원</option>
            <option value="5000">5,000원</option>
            <option value="10000">10,000원</option>
          </Select>
        </ColWithMarginTop>
        <ColWithMarginTop xs="4" sm="4" md="3" lg="3">
          <Select name="endDt" onChange={onChange} value={endDt}>
            <option value="">경매 진행기간</option>
            <option value="3">3일</option>
            <option value="5">5일</option>
            <option value="7">7일</option>
          </Select>
        </ColWithMarginTop>
      </Row>
      <RowWithMarginTop>
        <Col>
          <TextField
            name="description"
            autoComplete="description"
            placeholder="상품설명"
            type="textarea"
            onChange={onChange}
            value={description}
          />
        </Col>
      </RowWithMarginTop>
    </>
  );
};

export default React.memo(SellForm);
