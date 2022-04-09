import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const NavBar = ()=> {
  const navigate = useNavigate()
  const mother = localStorage.getItem("mother")
  const donor = localStorage.getItem("donor")
  const renderList = () =>{
    if(mother){
      return[
        <li key="aboutus"><Link to="/aboutus">About Us</Link></li>,
        <li key="request"><Link to="/requests">Requests</Link></li>,
        <li key="motherprofile"><Link to="/profile/mother">Profile</Link></li>,
        
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
    } 
    else if(donor){
      return[
        <li key="aboutus"><Link to="/aboutus">About Us</Link></li>,
        <li key="request"><Link to="/requests">Requests</Link></li>,
        <li key="donorprofile"><Link to="/profile/donor">Profile</Link></li>,
        
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
    } 
    else {
      return [
        <li key="aboutus"><Link to="/aboutus">About Us</Link></li>,
        <li key="login"><Link to="/login">Login</Link></li>
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