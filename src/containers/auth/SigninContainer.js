import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeField, initializeForm, signin, check } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const SigninForm = withRouter(
  ({
    history,
    form,
    auth,
    authError,
    user,
    changeField,
    initializeForm,
    signin,
    check,
  }) => {
    const [error, setError] = useState(null);

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      changeField({
        form: 'signin',
        key: name,
        value,
      });
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
      e.preventDefault();
      const { uid, passwd } = form;
      signin({ uid, passwd });
    };

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화
    useEffect(() => {
      initializeForm('signin');
    }, [initializeForm]);

    useEffect(() => {
      if (authError) {
        setError('로그인 실패');
        console.log(authError);
        return;
      }
      if (auth) {
        console.log('로그인 성공');
        localStorage.setItem('token', auth.accessToken);
        check();
      }
    }, [auth, authError, check]);

    useEffect(() => {
      if (user) {
        history.push('/');
        try {
          localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
          console.log('localStorage is not working');
        }
      }
    }, [history, user]);

    return (
      <AuthForm
        type="signin"
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
    signin,
    check,
  },
)(SigninForm);
