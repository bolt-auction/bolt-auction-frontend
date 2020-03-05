import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { FaWonSign } from 'react-icons/fa';

// TODO: 밸리데이션 기능 추가하고 에러일때 색상 변경하게 만들어야함
// FIXME: 밸리데이션 추가 완료하고 코드 정리
const StyledInputBlock = styled.div`
  outline: none;
  width: 100%;
  border-radius: 4px;
  padding: 1px;
  background-color: ${Colors.onSurfaceLow};
  &:hover {
    background-color: ${Colors.onSurfaceMedium};
  }
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
    font-weight: 500;
    color: ${Colors.onSurfaceHigh};
    &:focus {
      caret-color: ${Colors.primaryMatte[5]};
    }
  }

  /* focus될때 아웃라인의 색과 두께를 조절  */
  /* NOTE: input의 border 두께를 변경하면 크기가 바뀌면서 밀리는 현상을 없애기 위해 배경색상과 padding으로 아웃라인 처럼 보이게 만듬 */
  &:focus-within {
    background-color: ${Colors.primaryMatte[5]};
    padding: 2px;
  }
  .out-line {
    width: 100%;
    background-color: ${Colors.surface};
    border-radius: 3.5px;
    display: flex;
    align-items: center;
    padding: 14px;
    &:focus-within {
      border-radius: 2px;
      padding: 13px;
    }
  }
`;

/**
 * <Input /> 컴포넌트 랜더링
 * @param {object} props
 * @param {string} props.autoComplete - input autoComplete
 * @param {string} props.name - input name
 * @param {string} props.placeholder - input placeholder
 * @param {string} props.type - input type
 * @param {string|number|string[]} props.value - input value
 * @param {event} props.onChange - input onChange
 * @param {string} [props.icon] - 아이콘 사용 ( "mail" | "lock" | "won" )
 */
const Input = props => {
  const {
    autoComplete,
    name,
    placeholder,
    type,
    onChange,
    value,
    icon,
  } = props;
  return (
    <StyledInputBlock>
      <div className="out-line">
        {icon === 'mail' && <MdMailOutline />}
        {icon === 'lock' && <MdLockOutline />}
        {icon === 'won' && <FaWonSign />}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
    </StyledInputBlock>
  );
};

export default Input;
