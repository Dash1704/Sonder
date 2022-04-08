import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
    return (
      <div className="container">
      <h3>Hello, please click below to say if you are a Refugee or a Donor</h3>
      <div className="row">
      <div className="col s6">
      <button className="waves-effect waves-light btn-large btn-block"
      onClick={()=> {
        navigate('/signup/mother')
      }}><i className="large material-icons left">pregnant_woman</i>Mother</button>
      </div>
      <div className="col s6">
      <button className="waves-effect waves-light btn-large"
      onClick={()=> {
        navigate('/signup/donor')
      }}><i className="large material-icons left">shopping_basket</i>Donor</button>
      </div>
      </div>
    </div>
    )
  }

  export default HomePage