import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";


const NavBar = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()
  const user = localStorage.getItem("user")
  const renderList = () =>{
      
    if(user){
      return[
        <li key="home"><Link to="/">{t("about_us_navbar")}</Link></li>,
        <li key="request"><Link to="/requests">{t("requests_navbar")}</Link></li>,
        <li key="lang">  <a className='dropdown-trigger' href='#' data-target='dropdown1'>language</a>
                <ul id='dropdown1' className='dropdown-content'>
                  <li><a href="#!">en</a></li>
                  <li><a href="#!">es</a></li>
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