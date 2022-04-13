import React from 'react';
import LoginDonorForm from '../components/LoginForm/LoginDonorForm.js'
import LoginMotherForm from '../components/LoginForm/LoginMotherForm.js';
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
    return (
      
      <div className="container">
        <div className='signup-login-box'>
          <p className='signup-login-title login-margin-fix'> {t("Login_as_mother")}</p>
          < LoginMotherForm />
          <p className='signup-login-title login-margin-fix'> {t("Login_as_donor")}</p>
          < LoginDonorForm />
        </div>
      </div>
    )
  }

  export default Login