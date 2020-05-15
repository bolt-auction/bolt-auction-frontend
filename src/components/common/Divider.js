import React from 'react';
import styled, { css } from 'styled-components';

const DividerBlock = styled.hr`
  border: none;
  border-top: 2px solid;
  width: 100%;
  color: rgba(33, 33, 33, 0.08);
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${props =>
    props.thick &&
    css`
      border-top: ${props.thick} solid;
    `}
  ${props =>
    props.margin &&
    css`
      margin-top: ${props.margin};
      margin-bottom: ${props.margin};
    `}
`;

/**
 * NOTE:
 * refactor: 의미적으로 hr태그가 더 맞는것 같아 `div`에서 `hr`로 변경하고 그에 따라 스타일 요소들을 다시 정의하였다.
 */
/**
 * <Divider />를 랜더링합니다.
 * @param {object} [props]
 * @param {string} [props.thick="2px"] - Divider의 두깨를 결정합니다. 기본값 "2px"
 * @param {string} [props.margin="1rem"] - Divider의 top, bottom의 margin을 결정합니다. 기본값 "1rem"
 */
const Divider = props => {
  return props ? <DividerBlock {...props} /> : <DividerBlock />;
};

export default React.memo(Divider);
