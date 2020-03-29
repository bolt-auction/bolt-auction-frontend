import React, { useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

/*
 * react-epic-spinners 패키지를 설치하면 오류가 발생해서 필요한 부분만 가져와서 사용
 * 출처: https://github.com/bondz/react-epic-spinners
 */

const LoadingSpinnerBlock = styled.div`
  height: 85vh;
  width: 100%;
  &,
  .spinner-bg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .spinner-bg {
    position: fixed;
    height: 124px;
    width: 124px;
    border-radius: 4px;
    background-color: ${Colors.primaryPressed};
  }
`;

const SquareSpinner = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  border: 4px solid ${props => props.color};
  animation: fulfilling-square-spinner-animation
    ${props => props.animationDuration}ms infinite ease;
  * {
    box-sizing: border-box;
  }
  .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: ${props => props.color};
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation
      ${props => props.animationDuration}ms infinite ease-in;
  }
  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`;

const defaultProps = {
  size: 50,
  color: Colors.primary,
  animationDuration: 4000,
  className: '',
};

const LoadingSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    const rootStyle = document.getElementById('root').style;
    rootStyle.width = '100%';
    rootStyle.height = '100%';
    rootStyle.position = 'fixed';
    return () => {
      rootStyle.width = '';
      rootStyle.height = '';
      rootStyle.position = '';
    };
  }, []);
  return (
    <LoadingSpinnerBlock>
      <div className="spinner-bg">
        <SquareSpinner
          size={size}
          color={color}
          animationDuration={animationDuration}
          className={`fulfilling-square-spinner${
            className ? ' ' + className : ''
          }`}
          style={style}
          {...props}
        >
          <div className="spinner-inner" />
        </SquareSpinner>
      </div>
    </LoadingSpinnerBlock>
  );
};

LoadingSpinner.defaultProps = defaultProps;

export default LoadingSpinner;
