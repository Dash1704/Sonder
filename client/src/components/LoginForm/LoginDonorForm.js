import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginDonorForm = () => {
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
        localStorage.setItem("user",JSON.stringify(data.user))

        navigation('/requests/donor')})
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
                    DonorLogin()
                    }
                } >
                Log-In
            </button>
    </form>
    </div>

    )
  }

  export default LoginDonorForm