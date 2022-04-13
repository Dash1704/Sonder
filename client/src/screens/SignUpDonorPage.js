import React from 'react';
import SignUpDonorForm from '../components/SignUpForm/SignUpDonorForm.js';
import { useTranslation } from "react-i18next";

const SignUpDonorPage = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
      <p className='signup-title' >{t("sign_up_donor")}</p>
      < SignUpDonorForm />
      </div>
    )
  }

  export default SignUpDonorPage