import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm/ContactForm';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
        <div className="container">
          <div className='row'>
            <div className='col s7'>
              <h1>{t("welcome_to_sonder")}</h1>
              <p>{t("about_blurb")}</p>
              <h3>{t("about_how_it_works")}</h3>
              <p>{t("about_blurb_2")}</p>
            </div>
          <div className='col s4'>
            <ContactForm/>
          </div>
          </div>
        </div>
    )
  }

  export default AboutUs