import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SigninForm from '../containers/auth/SigninForm';

const SigninPage = () => {
  return (
    <AuthTemplate>
      <SigninForm />
    </AuthTemplate>
  );
};

export default SigninPage;
