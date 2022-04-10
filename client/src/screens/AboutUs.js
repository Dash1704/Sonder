import React from 'react';
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
    return (
      <div className="container">
      <h1>{t("welcome_to_sonder")}</h1>

      <p>{t("about_blurb")}</p>
      </div>
      
    )
  }

  export default AboutUs