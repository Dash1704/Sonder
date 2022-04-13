import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm/ContactForm';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
        <div className="container">
          <h1>{t("welcome_to_sonder")}</h1>
          <h3>Who we are</h3>
          <p>Sonder is the project of six Makers Academy students from the January 2022 cohort: Chloë, Jaroslaw, Eddie, Chris, Dash and Francesco. We all share the same passion of wanting to build something that serves good.</p>
          <h3>What we do</h3>
          <p>Some of us are personally impacted by the current international events, and all of us are deeply invested in the refugee crisis.</p>
          <p>While there are many charities helping refugees, we couldn t find a specific platform dedicated to helping refugee mothers and pregnant women.</p>
          <h3>Why the name</h3>
          <p>The term Sonder describes the sudden realisation that everyone has a story, and that each random passerby is living a life as vivid and complex as everyone else s. We are all living connected stories. These values of communion and empathy are at the core of Sonder.</p>
          <h3>How it works</h3>
          <p>On Sonder, refugee mothers can log into their personal area, and submit a request of help by picking items from different categories.</p>
          <p>The request is then available on the platform.</p>
          <p>Donors and volunteers can honour a request, and by doing so the mother in need is notified via email.</p>
          <p>The website is fully translated in seven languages, including Ukrainian, to make it as accessible as possible. It also uses icons and images where possible, for the same reason.
          <p></p>This project was built in 10 days, and the code lives on <a href="https://github.com/Dash1704/Sonder">GitHub</a>.</p>
          <div className="divider"></div>
            <ContactForm/>
          </div>
    )
  }

  export default AboutUs