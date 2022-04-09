import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
    return (
      <div className="container">
        <h1 className="center">Welcome to Sonder</h1>
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