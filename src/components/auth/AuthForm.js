import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../styles/Colors';
import Button from '../common/Button';
import Modal from '../common/Modal';
import Input from '../common/Input';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${Colors.gray[8]};
    margin-bottom: 1rem;
  }
`;

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

// TODO: 카카오톡 로그인 기능 구현
/**
 * type으로 전달되는 signin, signout에 맞추어 랜더링 됩니다.
 * @param {object} props
 * @param {string} props.type - "signin" | "signup"
 * @param {FormData} props.form -
 *  - (type="signin") {uid, passwd}
 *  - (type="signup") {uid, passwd, passwdConfirm, name}
 * @param {event} props.onChange
 * @param {event} props.onSubmit
 * @param {?string} props.error 유저에게 보여지는 에러 메시지
 */
const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <Modal randomBg>
      <AuthFormBlock>
        <h3>{text}</h3>
        <form onSubmit={onSubmit}>
          <Input
            name="uid"
            type="email"
            icon="mail"
            placeholder="이메일"
            autoComplete="uid"
            onChange={onChange}
            value={form.uid}
          />
          <Input
            name="passwd"
            type="password"
            placeholder="비밀번호"
            autoComplete="new-password"
            onChange={onChange}
            value={form.passwd}
          />
          {type === 'signup' && (
            <Input
              name="passwdConfirm"
              type="password"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
              onChange={onChange}
              value={form.passwdConfirm}
            />
          )}
          {type === 'signup' && (
            <Input
              name="name"
              type="text"
              placeholder="닉네임"
              autoComplete="name"
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
    </Modal>
  );
};

export default AuthForm;
