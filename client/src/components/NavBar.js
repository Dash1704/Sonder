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
  {
    code: 'it',
    name: 'Italiano',
    country_code: 'IT'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'FR'
  },
  {
    code: 'pl',
    name: 'Polski',
    country_code: 'PL'
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
  const mother = localStorage.getItem("mother")
  const donor = localStorage.getItem("donor")
  const renderList = () =>{
    const languageDropdownButton = 
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
          <span>{getUnicodeFlagIcon("GB")}</span>{languages[0].name}
        </li>
        <li onClick={() => i18next.changeLanguage(languages[1].code)}>
          <span>{getUnicodeFlagIcon("ES")}</span>{languages[1].name}
        </li>
        <li onClick={() => i18next.changeLanguage(languages[2].code)}>
          <span>{getUnicodeFlagIcon("IT")}</span>{languages[2].name}
        </li>
        <li onClick={() => i18next.changeLanguage(languages[3].code)}>
          <span>{getUnicodeFlagIcon("FR")}</span>{languages[3].name}
        </li>
        <li onClick={() => i18next.changeLanguage(languages[4].code)}>
          <span>{getUnicodeFlagIcon("PL")}</span>{languages[4].name}
        </li>
        </ul>
  </li>
  const logoutNavbar =
      <li key="logout">
        <button className="btn waves-effect waves-light #f50057 pink accent-3"
            onClick={()=> {
              localStorage.clear()
              navigate('/login')
            }}>
          {t("logout_navbar")}
        </button>
      </li>
      
    if(mother){
      return[
        <li key="aboutus"><Link to="/aboutus">{t("about_us_navbar")}</Link></li>,
        <li key="request"><Link to="/requests/mother">{t("requests_navbar")}</Link></li>,
        <li key="motherprofile"><Link to="/profile/mother">{t("profile_navbar")}</Link></li>,
        languageDropdownButton,
        logoutNavbar
      ]
    } 
    else if(donor){
      return[
        <li key="aboutus"><Link to="/aboutus">{t("about_us_navbar")}</Link></li>,
        <li key="request"><Link to="/requests/donor">{t("requests_navbar")}</Link></li>,
        <li key="donorprofile"><Link to="/profile/donor">{t("profile_navbar")}</Link></li>,
        languageDropdownButton,
        logoutNavbar
      ]
    } 
    else {
      return [
        <li key="aboutus"><Link to="/aboutus">{t("about_us_navbar")}</Link></li>,
        <li key="login"><Link to="/login">{t("login")}</Link></li>, <li key="lang"></li> ,
        languageDropdownButton
        
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