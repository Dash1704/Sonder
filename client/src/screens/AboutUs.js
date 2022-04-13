import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm/ContactForm';
import aboutUsImage from "../images/donor-image.png"

const AboutUs = () => {
  const { t } = useTranslation();
    return (
        <div className="container">
          <div className='row'>
            <div className='col s7'>
              <h1 className='about-us-header'>{t("welcome_to_sonder")}</h1>
              <p className='about-us-blurb'>{t("about_blurb")}</p>
              <h3>{t("about_how_it_works")}</h3>
              <p className='about-us-how-it-works'>{t("about_blurb_2")}</p>
            </div>
          <div className='col s5'>
            <img className="about-us-image" src={aboutUsImage} alt="Joyful mothers with their families"/>
            <ContactForm/>
          </div>
          </div>
        </div>
    )
  }

  export default AboutUs