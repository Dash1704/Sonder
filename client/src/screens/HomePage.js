import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import homepage1 from "../images/homepage1.jpg"


const HomePage = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
    return (
      // <div className="homepage">
        <div className="container font-body">
          <div className="row">
          <div className="col s6">
          <h1 className="left homepage-header">{t('welcome_to_sonder')}</h1>
          <h2 className="left homepage-slogan">{t('helping_mothers')}</h2>
          <h3 className="left homepage-motto">{t('sonder_motto')}</h3>
          </div>
          <div className="col s6">
          <img className="homepage-image" src={homepage1}></img>
          </div>
          <div className="section">
            <div className="row">
            <div className="col s6">
            <button className="waves-effect waves-light btn-large btn-block"
            onClick={()=> {
              navigate('/signup/mother')
            }}><i className="large material-icons right">pregnant_woman</i>{t("refugee_mother_button")}</button>
            </div>
            <div className="col s6">
            <button className="waves-effect waves-light btn-large btn-block"
            onClick={()=> {
              navigate('/signup/donor')
            }}><i className="large material-icons right">tag_faces</i>{t("volunteer_button")}</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default HomePage