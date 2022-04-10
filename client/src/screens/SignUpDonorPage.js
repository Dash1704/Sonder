import React from 'react';
import SignUpDonorForm from '../components/SignUpForm/SignUpDonorForm.js';
import { useTranslation } from "react-i18next";

const SignUpDonorPage = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
      <h1>{t("sign_up_donor")}</h1>
      < SignUpDonorForm />
      </div>
    )
  }

  export default SignUpDonorPage