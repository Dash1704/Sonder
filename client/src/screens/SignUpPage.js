import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm.js'
import SignUpMotherForm from '../components/SignUpForm/SignUpMotherForm.js';

const SignUpPage = () => {
    return (
      <>
      <h1>Sign-Up-Donor</h1>
      < SignUpForm />

      <h1>Sign-Up-Mother</h1>
      < SignUpMotherForm />
      </>
    )
  }

  export default SignUpPage