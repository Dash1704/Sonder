import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import homepage from "../images/homepage-image1.png"


const HomePage = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
    return (
      <div className="font">
        <div className="container">
        <div className="row homepage-top-divide">
          <div className="col s6">
            <h1 className="left homepage-header">{t('welcome_to_sonder')}</h1>
            <h2 className="left homepage-slogan">{t('helping_mothers')}</h2>
            <h3 className="left homepage-motto">{t('sonder_motto')}</h3>
          </div>
          <div className="col s6 homepage-image-cropped">
            <img className="homepage-image" src={homepage}/>
          </div>
        </div>
        </div>
      <div className="section">
        <div className="row homepage-bottom-divide">
          <div className="container">
          <div className="col s6">
            <div className="call-to-action center">
            <i className="medium material-icons top">pregnant_woman</i>
            <p>{t('refugee_mother_call_to_action')}</p>
            <div className="call-to-action-button">
            <button className="waves-effect waves-light btn-large"
          onClick={()=> {
            navigate('/signup/mother')
          }}>{t("refugee_mother_button")}</button>
          </div>
          </div>
          </div>
          <div className="col s6">
          <div className="call-to-action center">
          <i className="medium material-icons top">tag_faces</i>
            <p>{t('donor_call_to_action')}</p>
            <div className="call-to-action-button">
            <button className="waves-effect waves-light btn-large"
            onClick={()=> {
              navigate('/signup/donor')
            }}>{t("volunteer_button")}</button>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    )
  }

  export default HomePage