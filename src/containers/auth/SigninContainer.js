import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, check, initializeForm, signin } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const SigninForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user, loading } = useSelector(
    ({ auth, loading }) => ({
      form: auth.signin,
      auth: auth.auth,
      authError: auth.authError,
      user: auth.user,
      loading: loading['auth/SIGNIN'],
    }),
  );

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  // FIXME: [x]서버에 요청을 조금이라도 줄이기 위해서 로그인 요청 보내기 전에 입력하지 않은 폼 확인하고 에러 메시지 출력
  const onSubmit = e => {
    e.preventDefault();
    const { uid, passwd } = form;
    setError(null);
    dispatch(signin({ uid, passwd }));
  };

  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  useEffect(() => {
    setError(null);
    if (authError) {
      if (authError.response.status === 403) {
        setError('아이디 혹은 비밀번호가 잘못되었습니다.');
        return;
      }
      console.log(authError);
      setError('로그인에 실패하였습니다.');
      return;
    }
    if (auth) {
      localStorage.setItem('token', auth.accessToken);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

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
      loading={loading}
      error={error}
    />
  );
};

export default withRouter(SigninForm);
