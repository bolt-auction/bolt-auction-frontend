import React from 'react';
import SignupForm from '../containers/auth/SignupForm';
import Modal from '../components/common/Modal';

const SignupPage = () => {
  return (
    <Modal randomBg>
      <SignupForm />
    </Modal>
  );
};

export default SignupPage;
