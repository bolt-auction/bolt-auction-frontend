import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeField, initializeForm, signup, check } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const SignupForm = withRouter(
  ({
    history,
    form,
    auth,
    authError,
    user,
    changeField,
    initializeForm,
    signup,
    check,
  }) => {
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
    //TODO: '이미 사용중인 이메일 or 아이디 입니다' 에러 메시지 추가
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
    useEffect(() => {
      if (authError) {
        console.log('회원가입 실패');
        console.log(authError);
        return;
      }
      if (auth) {
        console.log('회원가입 성공');
        localStorage.setItem('token', auth.accessToken);
        check();
      }
    }, [auth, authError, check]);

    // user 값 설정 확인
    useEffect(() => {
      if (user) {
        history.push('/'); // 홈 화면으로 이동
        try {
          localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
          console.log('localStorage is not working');
        }
        return;
      }
    }, [history, user]);

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
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
    user: auth.user,
  }),
  {
    changeField,
    initializeForm,
    signup,
    check,
  },
)(SignupForm);
