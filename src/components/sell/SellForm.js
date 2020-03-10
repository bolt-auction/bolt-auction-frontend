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

const SellForm = () => {
  return (
    <>
      <RowWithMarginTop>
        <Col xs="2" sm="2" md="3">
          <Select>
            <option selected disabled>
              카테고리
            </option>
            <option>카테고리 1</option>
            <option>카테고리 2</option>
            <option>카테고리 3</option>
          </Select>
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col md="12">
          <TextField placeholder="상품명" />
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col md="3">
          <TextField placeholder="즉시 구매가" />
        </Col>
        <Col md="3">
          <TextField placeholder="경매 시작가" />
        </Col>
        <Col md="3">
          <Select>
            <option selected disabled>
              최소 입찰단위
            </option>
            <option>100원</option>
            <option>1,000원</option>
            <option>5,000원</option>
            <option>10,000원</option>
          </Select>
        </Col>
        <Col md="3">
          {/* <TextField type="date" placeholder="경매 진행기간" /> */}
          <Select>
            <option selected disabled>
              경매 진행기간
            </option>
            <option>3일</option>
            <option>5일</option>
            <option>7일</option>
          </Select>
        </Col>
      </RowWithMarginTop>
      <RowWithMarginTop>
        <Col>
          <TextField isTextarea placeholder="상품설명" />
        </Col>
      </RowWithMarginTop>
    </>
  );
};

export default SellForm;
