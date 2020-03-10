import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Colors from '../../styles/Colors';
import Elevation from '../../styles/Elevation';

// TODO: text 스타일 버튼 추가
const buttonStyle = css`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.25px;
  text-align: center;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  min-height: 36px;
  min-width: 96px;
  outline: none;
  cursor: pointer;
  background: ${Colors.gray[7]};
  box-shadow: ${Elevation.z2};
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${Colors.gray[6]};
    box-shadow: ${Elevation.z4};
  }
  &,
  &:visited {
    color: ${Colors.surface};
  }
  &:disabled {
    background: ${Colors.gray[1]};
    color: ${Colors.gray[4]};
    cursor: not-allowed;
  }
  ${props =>
    props.roundShape &&
    css`
      border-radius: 28px;
    `}
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.primary &&
    css`
      background: ${Colors.primary};
      &:hover {
        background: ${Colors.primaryMatte[5]};
      }
    `}
  ${props =>
    props.kakao &&
    css`
      background: ${Colors.kakao[0]};
      &,
      &:visited {
        color: ${Colors.kakao[2]};
      }
      &:hover {
        background: ${Colors.kakao[1]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? (
    <StyledLink
      {...props}
      primary={props.primary ? 1 : 0}
      kakao={props.kakao ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
