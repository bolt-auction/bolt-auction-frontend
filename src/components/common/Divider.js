import React from 'react';
import styled, { css } from 'styled-components';

const DividerBlock = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(33, 33, 33, 0.08);
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${props =>
    props.thick &&
    css`
      height: ${props.thick};
    `}
  ${props =>
    props.margin &&
    css`
      margin-top: ${props.margin};
      margin-bottom: ${props.margin};
    `}
`;

const Divider = props => {
  return props ? <DividerBlock {...props} /> : <DividerBlock />;
};

export default Divider;
