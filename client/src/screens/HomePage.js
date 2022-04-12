import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import homepage from "../images/homepage-image.png"


const HomePage = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
    return (
      <div className="font">
        <div className="container">
        <div className="row homepage-top-divide">
          <div className="col s6">
            <br/>
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
            <p className="call_to_action_title">{t('refugee_mother_call_to_action_title')}</p>
            <p>{t('refugee_mother_call_to_action')}</p>
            <button className="waves-effect waves-light btn-small call-to-action-button"
          onClick={()=> {
            navigate('/signup/mother')
          }}>{t("refugee_mother_button")}</button>
          </div>
          </div>
          <div className="col s6">
          <div className="call-to-action center">
          <i className="medium material-icons top">tag_faces</i>
            <p className="call_to_action_title">{t('donor_call_to_action_title')}</p>
            <p>{t('donor_call_to_action')}</p>
            <button className="waves-effect waves-light btn-small call-to-action-button"
            onClick={()=> {
              navigate('/signup/donor')
            }}>{t("volunteer_button")}</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    )
  }

  export default HomePage