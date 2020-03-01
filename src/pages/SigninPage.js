import React from 'react';
import SigninForm from '../containers/auth/SigninForm';
import Modal from '../components/common/Modal';

const SigninPage = () => {
  return (
    <Modal randomBg>
      <SigninForm />
    </Modal>
  );
};

export default SigninPage;
