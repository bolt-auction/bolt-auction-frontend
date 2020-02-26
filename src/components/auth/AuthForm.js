import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../styles/Colors';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${Colors.gray[8]};
    margin-bottom: 1rem;
  }
`;

// 스타일링된 input
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${Colors.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${Colors.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
const AuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${Colors.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${Colors.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  height: 36px;
  font-size: 14px;
  padding: 0.25rem;
`;

const textMap = {
  signin: '로그인',
  signup: '회원가입',
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="uid"
          name="uid"
          placeholder="이메일"
          onChange={onChange}
          value={form.uid}
        />
        <StyledInput
          autoComplete="new-password"
          name="passwd"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.passwd}
        />
        {type === 'signup' && (
          <StyledInput
            autoComplete="new-password"
            name="passwdConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwdConfirm}
          />
        )}
        {type === 'signup' && (
          <StyledInput
            autoComplete="name"
            name="name"
            placeholder="닉네임"
            type="text"
            onChange={onChange}
            value={form.name}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop primary fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      {type === 'signin' && (
        <ButtonWithMarginTop kakao fullWidth>
          카카오톡으로 로그인
        </ButtonWithMarginTop>
      )}
      <AuthFooter>
        {type === 'signin' ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/signin">로그인</Link>
        )}
      </AuthFooter>
    </AuthFormBlock>
  );
};

export default AuthForm;
