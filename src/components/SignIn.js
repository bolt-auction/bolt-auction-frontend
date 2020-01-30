import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h1>로그인 컴포넌트</h1>
      <Link to="/signup">회원가입으로 이동</Link>
    </div>
  );
};
export default SignIn;
