import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
    const UserLogin = () => {
        fetch("/sessions/login", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {console.log(data)
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

            <input type="submit"
                data-testid="signup-button"
                onClick = {() => UserLogin()} 
            />
    </form>
    </div>

    )
  }

  export default LoginForm