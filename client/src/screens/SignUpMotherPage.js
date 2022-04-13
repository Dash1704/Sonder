import React from 'react';
import SignUpMotherForm from '../components/SignUpForm/SignUpMotherForm.js';
import { useTranslation } from "react-i18next";

const SignUpMotherPage = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
        <div className='signup-login-box'>
          <p className='signup-login-title'>{t("sign_up_mother")}</p>
          < SignUpMotherForm />
        </div>
      </div>
    )
  }

  export default SignUpMotherPage