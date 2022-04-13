import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm/ContactForm';
import aboutUsImage from "../images/sonder-logos.png"

const AboutUs = () => {
  const { t } = useTranslation();
    return (
        <div className="container">
          <div className='row'>
            <div className='col s6'>
              <h1 className='about-us-header'>{t("we_are_sonder")}</h1>
              <p className='about-us-blurb'>{t("about_blurb")}</p>
            </div>
          <div className='row'>
            <div className='col s6'>
              <img className="about-us-image" src={aboutUsImage} alt="Sonder in icons"/>
            </div>
          </div>
              <div className='row'>
                <div className='about-us-works-box col s4'>
                  <h3 className="about-us-works-header">{t("about_how_it_works")}:</h3>
                  <p className='about-us-how-it-works'>{t("about_blurb_2")}</p>
                </div>
                <div className='col s4'>
                    <ContactForm/>
                </div>
            </div>
          </div>
        </div>
    )
  }

  export default AboutUs