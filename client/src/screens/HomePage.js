import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigation = useNavigate();
    return (
      <>
      <h1>Welcome to Sonder!</h1>

      <p>Where refugee mothers are able to obtain necessary items for their children and while in pregnancy.</p>
      
      <button
                data-testid="signup-button"
                onClick = {(e) => {
                    e.preventDefault();
                    navigation('/signup')
                    }
                } >
                Sign-Up
            </button>
      </>
      
    )
  }

  export default HomePage