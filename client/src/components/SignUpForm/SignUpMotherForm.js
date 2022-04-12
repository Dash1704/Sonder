import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import M from 'materialize-css';
import { useTranslation } from "react-i18next";

const SignUpMotherForm = () => {
    const { t } = useTranslation();
    const navigation = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");


    const postSignup = () => {
   
        fetch("/users/mother", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
                city
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                M.toast({html: data.error, classes: '#d32f2f red darken-2'})
            } else {
              M.toast({html:data.message, classes: '#536dfe indigo accent-2'})
              navigation('/login')
            }           
        })
        .catch(err => console.log(err))
    }

    return (

    <div>

    
        <div className="card">
         <form>
            <div className="input-field validate">
            <label htmlFor="name">{t("name")}</label>
            <input type="text" 
                data-testid="name"
                value={name}
                onChange = {(e) => setName(e.target.value)}
            /> 
            </div>

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
                data-testid="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            </div>

            <div className="input-field validate">
            <label htmlFor="city">{t("city")}</label>
            <input type="text" 
                data-testid="city"
                value={city}
                onChange = {(e) => setCity(e.target.value)}
            />
            </div>
            <button className="btn waves-effect waves-light"
                data-testid="signup-button"
                onClick = {(e) => {
                    e.preventDefault();
                    postSignup();
                    }
                } >
                {t("sign_up")}
                
            </button>
    </form>
    </div>
            </div>
    

    )
  }

  export default SignUpMotherForm