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
        <form>
            <div className="input-field validate">
            <label htmlFor="email">Email</label>
            <input type="email" 
                data-testid="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />
            </div>
            
            <div className="input-field validate">
            <label htmlFor="password">{t("password")}</label>
            <input type="password" 
                className='validate'
                data-testid="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            </div>


            <button className="btn waves-effect waves-light"
                data-testid="login-button"
                onClick = {(e) => {
                    e.preventDefault();
                    DonorLogin()
                    }
                } >
               {t("login")}
            </button>
    </form>
    </div>
    </div>

    )
  }

  export default LoginDonorForm