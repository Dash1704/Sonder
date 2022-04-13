import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";

const LoginDonorForm = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
    const DonorLogin = () => {
        fetch("/sessions/login/donor", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
        localStorage.setItem("donor",JSON.stringify(data.user))

        navigation('/requests/donor')})
        .catch(err => console.log(err))
    }

    return (

<div>

      <div className='card'>
        <form className="cardy">
        <div className="row">
        <div className="input-field">
        <i className="material-icons prefix">email</i>
            <input 
                className="validate"
                id="email-donor icon_prefix"
                type='email'
                // placeholder='Your registered email'
                required
                aria-required="true"
                data-testid="email-donor"

                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email-donor">Email</label>
            <span className="helper-text" data-error="Please enter a valid email" data-success=""></span>
        </div>
            <div className="input-field">
            <i className="material-icons prefix">lock_outside</i>
            <input 
                className='validate'
                id="password-donor icon_prefix"
                type="password" 
                aria-required="true"
                data-testid="password-donor"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password-donor">{t("Password")}</label>
            </div>

            <div className="input-field">
            <button className="btn waves-effect waves-light"
                data-testid="login-donor-button"
                onClick = {(e) => {
                    e.preventDefault();
                    DonorLogin()
                    }
                } >
               {t("Login")}
            </button>
            </div>
        </div>
    </form>
                </div>
    </div>
    

    )
  }

  export default LoginDonorForm