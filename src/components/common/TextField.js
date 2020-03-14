import React from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../styles/Colors';
import { MdEnhancedEncryption, MdLock, MdMail, MdPerson } from 'react-icons/md';
import { FaWonSign } from 'react-icons/fa';

/**
 * TODO:
 *  []필드 하단에 helper text 추가
 *  []머티리얼 디자인 처럼 focus, 값이 존재할때 border에 label 랜더링
 *  []밸리데이션 기능 추가하고 에러일때 색상 변경하게 만들어야함
 * FIXME:
 *  [x]StyledTextareaBlock을 합치고 컴포넌트 명 <TextField />로 변경
 *  []현재 아웃라인 padding으로 랜더링하는 방식을 내부 div의 border로 변경하는것 시도
 *  []css코드 정리(리팩토링)
 * NOTE:
 *  - textarea는 type 어트리뷰트가 없기 때문에 isTextarea 대신 type의 유무를 판단해서 구분해도 좋을것 같다.
 */

const textFieldStyle = css`
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
  .out-line {
    width: 100%;
    background-color: ${Colors.surface};
    border-radius: 3.5px;
    display: flex;
    align-items: center;
    padding: 14px;
  }
  svg {
    font-size: 1.5rem;
    color: ${Colors.onSurfaceLow};
  }
  /* focus될때 아웃라인의 색과 두께를 조절  */
  /* NOTE: border 두께를 변경하면 크기가 바뀌면서 밀리는 현상을 없애기 위해 배경색상과 padding으로 아웃라인 처럼 보이게 만듬 */
  &:focus-within {
    background-color: ${Colors.primaryMatte[5]};
    padding: 2px;
    .out-line:focus-within {
      border-radius: 2px;
      padding: 13px;
    }
    svg {
      color: ${Colors.onSurfaceMedium};
    }
  }
`;

const StyledInputBlock = styled.div`
  ${textFieldStyle}
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
  svg {
    margin-right: 16px;
  }
`;

const StyledTextareaBlock = styled.div`
  ${textFieldStyle}
  textarea {
    padding: 0px;
    resize: none;
    outline: none;
    overflow: hidden;
    border: none;
    border-radius: 4px;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    color: ${Colors.onSurfaceHigh};
    &:focus {
      caret-color: ${Colors.primaryMatte[5]};
    }
  }
`;

/**
 * <TextField /> 컴포넌트 랜더링
 * @param {object} props
 * @param {boolean} [props.isTextarea] - TextField를 textarea로 사용
 * @param {string} props.autoComplete - TextField autoComplete
 * @param {string} props.name - TextField name
 * @param {string} props.placeholder - TextField placeholder
 * @param {string} props.type - TextField type (값이 "textarea"라면 <textarea>로 랜더링)
 * @param {string|string[]|number} props.value - TextField value
 * @param {event} props.onChange - TextField onChange
 * @param {string} [props.icon] - input에서 아이콘 사용 ( "mail" | "lock"| "lockCheck" | "person" | "won" )
 */
const TextField = props => {
  const {
    autoComplete,
    name,
    placeholder,
    type,
    onChange,
    value,
    icon,
  } = props;

  return type === 'textarea' ? (
    <StyledTextareaBlock>
      <div className="out-line">
        <textarea
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          maxLength="255"
          rows="8"
        ></textarea>
      </div>
    </StyledTextareaBlock>
  ) : (
    <StyledInputBlock>
      <div className="out-line">
        {icon === 'mail' && <MdMail />}
        {icon === 'lock' && <MdLock />}
        {icon === 'lockCheck' && <MdEnhancedEncryption />}
        {icon === 'person' && <MdPerson />}
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

export default TextField;
