import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import M from 'materialize-css'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import i18next from 'i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'GB'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'ES'
  },
]


const NavBar = () => {
  useEffect(()=>{
    let dropdowns = document.querySelectorAll(".dropdown-trigger");
    let options = {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      belowOrigin: true
    };
    M.Dropdown.init(dropdowns, options);

    }, [])

  const { t } = useTranslation();
  const navigate = useNavigate()
  const user = localStorage.getItem("user")
  const renderList = () =>{
      
    if(user){
      return[
        <li key="home"><Link to="/">{t("about_us_navbar")}</Link></li>,
        <li key="request"><Link to="/requests">{t("requests_navbar")}</Link></li>,
        <li key="lang">
        <a 
        className='dropdown-trigger large material-icons' 
        href='#' 
        data-target='dropdown1'
        onMouseEnter={e => {
          const inst = M.Dropdown.getInstance(e.target);
          inst && inst.open();
          }}
        >language</a>
          <ul id='dropdown1' className='dropdown-content'>
          <li onClick={() => i18next.changeLanguage(languages[0].code)}>
            {/* <button className="dropdown-item" onClick={() => i18next.changeLanguage(languages[0].code)}></button> */}
            <span>{getUnicodeFlagIcon("GB")}</span>{languages[0].name}</li>
            <li onClick={() => i18next.changeLanguage(languages[1].code)}>
            {/* <button className="dropdown-item" onClick={() => i18next.changeLanguage(languages[1].code)}></button> */}
              <span>{getUnicodeFlagIcon("ES")}</span>{languages[1].name}</li>
          </ul>
        </li>,
        <li key="logout">
        <button className="btn waves-effect waves-light #f50057 pink accent-3"
        onClick={()=> {
          localStorage.clear()
          navigate('/login')
        }}>
        {t( "logout_navbar")}
        </button>
        </li>
      ]
    } else {
      return [
        <li key="aboutus"><Link to="/aboutus">{t("about_us_navbar")}</Link></li>,
        <li key="login"><Link to="/login">{t("login_navbar")}</Link></li>
      ]
    }
  }
  
  return (
  <div className="container">
  <nav>
  <div className="nav-wrapper">
  <div className="col s12">
    <Link to="/" className="brand-logo left">Sonder</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {renderList()}
    </ul>
  </div>
  </div>
  </nav>
  </div>
  )
  }

  export default NavBar