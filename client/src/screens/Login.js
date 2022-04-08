import React from 'react';
import LoginDonorForm from '../components/LoginForm/LoginDonorForm.js'
import LoginMotherForm from '../components/LoginForm/LoginMotherForm.js';

const Login = () => {
    return (
      <div className="container">
      <h1>Log In as Mother</h1>
      < LoginMotherForm />
      <h1>Log In as Donor</h1>
      < LoginDonorForm />
      </div>
    )
  }

  export default Login