import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../styles/Colors';

/**
 * @property icon : 아이콘 사용
 * react-icons 사용하려면 icon 프로퍼티를 주고 컴포넌트 삽입
 * @example
 * import Input from './common/Input';
 * import { MdMailOutline } from 'react-icons/md';
 * <Input icon><MdMailOutline></Input>
 */

// TODO: 밸리데이션 기능 추가하고 에러일때 색상 변경하게 만들어야함
// FIXME: 밸리데이션 추가 완료하고 코드 정리
const StyledIconInputBlock = styled.div`
  background-color: ${Colors.onSurfaceLow};
  border-radius: 4px;
  padding: 1px;
  outline: none;
  width: 100%;
  & + & {
    margin-top: 1rem;
  }

  svg {
    margin-right: 16px;
    font-size: 1.5rem;
    color: ${Colors.onSurfaceMedium};
  }

  input {
    padding: 0px;
    border: none;
    width: 100%;
    font-size: 1rem;
    color: ${Colors.onSurfaceHigh};
    &:focus {
      caret-color: ${Colors.primaryMatte[5]};
    }
  }

  /* 
    focus될때 아웃라인의 색과 두께를 조절 
    NOTE: input의 border 두께를 변경하면 크기가 바뀌면서 밀리는 현상을 없애기 위해
          배경색상과 padding으로 아웃라인 처럼 보이게 만듬
  */
  &:focus-within {
    background-color: ${Colors.primaryMatte[5]};
    padding: 2px;
  }
  .bg {
    width: 100%;
    background-color: ${Colors.surface};
    border-radius: 3.5px;
    display: flex;
    align-items: center;
    padding: 14px;
    &:focus-within {
      padding: 13px;
      border-radius: 2px;
    }
  }
`;

const Input = ({
  icon,
  children,
  autoComplete,
  name,
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <StyledIconInputBlock>
      <div className="bg">
        {icon && children}
        <input
          autoComplete={autoComplete}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </div>
    </StyledIconInputBlock>
  );
};

export default Input;
