import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm/ContactForm';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
        <div className="container aboutus">
          <h1>{t("welcome_to_sonder")}</h1>
          <p>{t("about_blurb")}</p>
          <h3>{t("about_how_it_works")}</h3>
          <p>{t("about_blurb_2")}</p>
          <ContactForm/>
          </div>
    )
  }

  export default AboutUs