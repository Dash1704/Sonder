import React from 'react';
import SignUpDonorForm from '../components/SignUpForm/SignUpDonorForm.js';
import { useTranslation } from "react-i18next";

const SignUpDonorPage = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
        <div className='signup-login-box'>
          <p className='signup-login-title' >{t("sign_up_donor")}</p>
          < SignUpDonorForm />
        </div>
      </div>
    )
  }

  export default SignUpDonorPage