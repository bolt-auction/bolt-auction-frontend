import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const SignupForm = withRouter(
  ({ history, form, auth, authError, changeField, initializeForm, signup }) => {
    const [error, setError] = useState(null);

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      changeField({
        form: 'signup',
        key: name,
        value,
      });
    };

    // 폼 등록 이벤트 핸들러
    // TODO: '이미 사용중인 이메일 or 아이디 입니다', '올바른 이메일 형식이 아닙니다' 에러 메시지 추가
    const onSubmit = e => {
      e.preventDefault();
      const { uid, passwd, passwdConfirm, name } = form;
      if ([uid, passwd, passwdConfirm].includes('')) {
        setError('빈 칸을 모두 입력하세요.');
        return;
      }
      if (passwd !== passwdConfirm) {
        setError('비밀번호가 일치하지 않습니다.');
        changeField({ form: 'signup', key: 'passwd', value: '' });
        changeField({ form: 'signup', key: 'passwdConfirm', value: '' });
        return;
      }
      signup({ uid, passwd, name });
    };

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
      initializeForm('signup');
    }, [initializeForm]);

    // 회원가입 성공/실패 처리
    // TODO: 회원가입 성공 후 로그인 페이지로 이동하기 전 성공했다는 메시지 보여주기
    useEffect(() => {
      if (authError) {
        console.log('회원가입 실패');
        console.log(authError);
        return;
      }
      if (auth) {
        console.log('회원가입 성공');
        history.push('/signin');
      }
    }, [auth, authError, history]);

    return (
      <AuthForm
        type="signup"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    );
  },
);

export default connect(
  ({ auth }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
  }),
  {
    changeField,
    initializeForm,
    signup,
  },
)(SignupForm);
