import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const NavBar = ()=> {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")
  const renderList = () =>{
    if(user){
      return[
        <li key="home"><Link to="/">About Us</Link></li>,
        <li key="request"><Link to="/requests">Requests</Link></li>,
        
        <li key="logout">
        <button className="btn waves-effect waves-light #f50057 pink accent-3"
        onClick={()=> {
          localStorage.clear()
          navigate('/login')
        }}>
         Log Out 
        </button>
        </li>
      ]
    } else {
      return [
        <li key="aboutus"><Link to="/aboutus">About Us</Link></li>,
        <li key="login"><Link to="/login">Login</Link></li>
      ]
    }
  }
  
  return (
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo left">Sonder</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {renderList()}
    </ul>
  </div>
  </nav>
  )
  }

  export default NavBar