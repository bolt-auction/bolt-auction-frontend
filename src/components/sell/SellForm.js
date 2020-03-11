import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-awesome-styled-grid';

import Select from '../common/Select';
import TextField from '../common/TextField';

/**
 * TODO:
 *  []밸리데이션 추가
 *    []숫자만 존재하는지
 *    []문자열 길이
 *    []모든 양식이 채워졌는지
 * FIXME:
 *  []경매 진행기간 선택 캘린더(피커)로 전환 (현재 일로부터 최대 일주일)
 * NOTE:
 *  - 캘린더 피커로 전환시 모바일 페이지에서는 네이티브가 사용자 경험이 좋다는것 고려하기
 */

const RowWithMarginTop = styled(Row)`
  margin-top: 1rem;
`;

const SellForm = ({ product, sell, onChange }) => {
  return (
    <>
      <RowWithMarginTop>
        <Col xs="2" sm="2" md="3">
          <Select
            name="categoryId"
            onChange={onChange}
            value={product.categoryId}
          >
            <option>카테고리</option>
            <option value="1">카테고리 1</option>
            <option value="2">카테고리 2</option>
            <option value="3">카테고리 3</option>
            <option value="4">카테고리 4</option>
            <option value="5">카테고리 5</option>
            <option value="6">카테고리 6</option>
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
            onChange={onChange}
            value={product.name}
          />
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col md="3">
          <TextField
            name="quickPrice"
            autoComplete="quickPrice"
            placeholder="즉시 구매가"
            type="number"
            onChange={onChange}
            value={product.quickPrice}
          />
        </Col>
        <Col md="3">
          <TextField
            name="startPrice"
            autoComplete="startPrice"
            placeholder="경매 시작가"
            type="number"
            onChange={onChange}
            value={product.startPrice}
          />
        </Col>
        <Col md="3">
          <Select
            name="minBidPrice"
            onChange={onChange}
            value={product.minBidPrice}
          >
            <option>최소 입찰단위</option>
            <option value="100">100원</option>
            <option value="1000">1,000원</option>
            <option value="5000">5,000원</option>
            <option value="10000">10,000원</option>
          </Select>
        </Col>
        <Col md="3">
          {/* <TextField type="date" placeholder="경매 진행기간" /> */}
          <Select name="endDt" onChange={onChange} value={product.endDt}>
            <option>경매 진행기간</option>
            <option value="3">3일</option>
            <option value="5">5일</option>
            <option value="7">7일</option>
          </Select>
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col>
          <TextField
            isTextarea
            name="description"
            autoComplete="description"
            placeholder="상품설명"
            type="text"
            onChange={onChange}
            value={product.description}
          />
        </Col>
      </RowWithMarginTop>
    </>
  );
};

export default SellForm;
