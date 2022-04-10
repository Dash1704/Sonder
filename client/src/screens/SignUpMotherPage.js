import React from 'react';
import SignUpMotherForm from '../components/SignUpForm/SignUpMotherForm.js';
import { useTranslation } from "react-i18next";

const SignUpMotherPage = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
      <h1>{t("sign_up_mother")}</h1>
      < SignUpMotherForm />
      </div>
    )
  }

  export default SignUpMotherPage