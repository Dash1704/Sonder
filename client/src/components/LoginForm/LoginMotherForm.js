import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";

const LoginMotherForm = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
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
        <form>
            <div className="input-field validate">
            <label htmlFor="email">Email</label>
            <input type="text" 
                data-testid="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            /> 
            </div>

            <div className="input-field validate">
            <label htmlFor="password">{t("password")}</label>
            <input type="text" 
                data-testid="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            </div>

            <button className="btn waves-effect waves-light"
                data-testid="login-button"
                onClick = {(e) => {
                    e.preventDefault();
                    MotherLogin()
                    }
                } >
                {t("login")}
            </button>
    </form>
    </div>

    )
  }

  export default LoginMotherForm