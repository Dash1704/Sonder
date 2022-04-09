import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";

const HomePage = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
    return (
      <div className="container">
        <h2 className="center">{t('welcome_to_sonder')}</h2>
        <h3 className="center">We help refugee mothers access all the help they need</h3>
        <div className="section">
          <div className="row">
          <div className="col s6">
          <button className="waves-effect waves-light btn-large btn-block"
          onClick={()=> {
            navigate('/signup/mother')
          }}><i className="large material-icons right">pregnant_woman</i>I am a refugee mother</button>
          </div>
          <div className="col s6">
          <button className="waves-effect waves-light btn-large btn-block"
          onClick={()=> {
            navigate('/signup/donor')
          }}><i className="large material-icons left">tag_faces</i>I am a volunteer / donor</button>
          </div>
          </div>
        </div>
      </div>
    )
  }

  export default HomePage