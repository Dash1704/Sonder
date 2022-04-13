import React from 'react';
import LoginDonorForm from '../components/LoginForm/LoginDonorForm.js'
import LoginMotherForm from '../components/LoginForm/LoginMotherForm.js';
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
    return (
      
      <div className="container">
      <h1> {t("Login_as_mother")}</h1>
      < LoginMotherForm />
      <h1> {t("Login_as_donor")}</h1>
      < LoginDonorForm />
      </div>

    )
  }

  export default Login