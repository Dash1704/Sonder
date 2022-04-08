import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginMotherForm = () => {
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
        localStorage.setItem("user",JSON.stringify(data.user))

        navigation('/requests')})
        .catch(err => console.log(err))
    }

    return (

    <div>
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" 
                data-testid="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            /> 

            <label htmlFor="password">Password</label>
            <input type="text" 
                data-testid="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />

<button
                data-testid="login-button"
                onClick = {(e) => {
                    e.preventDefault();
                    MotherLogin()
                    }
                } >
                Log-In
            </button>
    </form>
    </div>

    )
  }

  export default LoginMotherForm