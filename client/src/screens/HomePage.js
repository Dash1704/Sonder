import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";


const HomePage = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
    return (
      <div className="homepage">
        <div className="container">
          <h2 className="center sonder-logo">{t('welcome_to_sonder')}</h2>
          <h3 className="center">{t('helping_mothers')}</h3>
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