import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
    return (
      <>
      <h3>Hello, please click below to say if you are a Refugee or a Donor</h3>

      <button className="waves-effect waves-light btn-large"
      onClick={()=> {
        navigate('/signup/mother')
      }}><i className="material-icons left">pregnant_woman</i>Mother</button>

<button className="waves-effect waves-light btn-large"
      onClick={()=> {
        navigate('/signup/donor')
      }}><i className="material-icons left">shopping_basket</i>Donor</button>
    </>
    )
  }

  export default HomePage