import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";
// import M from "materialize-css"

const LoginMotherForm = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();

    // useEffect(() => {
    //     M.updateTextFields();
    // }, [])

    const MotherLogin = () => {
        fetch("/sessions/login/mother", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
        localStorage.setItem("mother",JSON.stringify(data.user))

        navigation('/requests/mother')})
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
                id="email-mother icon_prefix"
                type='email'
                required
                aria-required="true"
                data-testid="email-mother"

                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email-mother">Email</label>
            <span className="helper-text" data-error="Please enter a valid email" data-success=""></span>
        </div>
        <div className="input-field">
        <i className="material-icons prefix">lock_outside</i>
            <input 
                className='validate'
                id="password-mother"
                type="password"
                aria-required="true"
                data-testid="password-mother"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password-mother">{t("Password")}</label>
            </div>

            <div className="input-field">
            <button className="btn waves-effect waves-light call-to-action-button"
                data-testid="login-mother-button"
                onClick = {(e) => {
                    e.preventDefault();
                    MotherLogin()
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

  export default LoginMotherForm