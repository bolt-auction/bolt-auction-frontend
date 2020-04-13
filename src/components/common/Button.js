import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Colors from '../../styles/Colors';
import Elevation from '../../styles/Elevation';

// TODO: [x]text 스타일 버튼 추가
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
  &:hover {
    background-color: ${Colors.primaryHover};
  }
  &,
  &:visited {
    color: ${Colors.primary};
  }
  &:disabled {
    &,
    &:hover {
    color: ${Colors.gray[4]};
    background-color: ${Colors.gray[1]};
    cursor: not-allowed;
    box-shadow: none;
  }
  }
  ${props =>
    props.roundshape &&
    css`
      border-radius: 28px;
    `}
  ${props =>
    props.fullwidth &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      width: 100%;
    `}
  ${props =>
    (props.primary || props.kakao) &&
    css`
      box-shadow: ${Elevation.z2};
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        box-shadow: ${Elevation.z4};
      }
    `}
  ${props =>
    props.primary &&
    css`
      background-color: ${Colors.primary};
      &,
      &:visited {
        color: ${Colors.surface};
      }
      &:hover {
        background-color: ${Colors.primaryMatte[5]};
      }
    `}
  ${props =>
    props.kakao &&
    css`
      background-color: ${Colors.kakao[0]};
      &,
      &:visited {
        color: ${Colors.kakao[2]};
      }
      &:hover {
        background-color: ${Colors.kakao[1]};
      }
    `}
  ${props =>
    props.outline &&
    css`
      background-color: ${Colors.surface};
      border: 1px solid ${Colors.primary};
      min-height: 24px;
      padding: 0rem 1rem;
      &,
      &:hover,
      &:visited {
        box-shadow: none;
        color: ${Colors.primary};
      }
      &:hover {
        background-color: ${Colors.primaryHover};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
/**
 * <Button /> 랜더링 (default: text style)
 * @param {object} props
 * @param {string} [props.to] - to가 존재 하는경우 StyledLink로 반환합니다.
 * @param {boolean} [props.roundshape] - 둥근 모양의 버튼으로 랜더링합니다.
 * @param {boolean} [props.fullwidth] - 버튼의 크기를 최대 넓이로 랜더링합니다.
 * @param {boolean} [props.primary] - 버튼을 primary색으로 랜더링합니다.
 * @param {boolean} [props.kakao] - 버튼을 카카오색으로 랜더링합니다.
 * @param {boolean} [props.outline] - 버튼을 아웃라인 스타일로 랜더링합니다.
 */
const Button = props => {
  // NOTE: 리액트에서 사용자 지정 어트리뷰트는 lowcase이어야한다.
  return props.to ? (
    <StyledLink
      {...props}
      primary={props.primary ? 1 : 0}
      kakao={props.kakao ? 1 : 0}
      outline={props.outline ? 1 : 0}
      fullwidth={props.fullwidth ? 1 : 0}
      roundshape={props.roundshape ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
