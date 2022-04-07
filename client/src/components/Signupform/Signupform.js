import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const postSignup = () => {
        fetch("/users", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate("/login")
        })
        .catch(err => console.log(err))
    }

    return (

    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" 
                data-testid="name"
                value={name}
                onChange = {(e) => setName(e.target.value)}
            /> 
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
                data-testid="signup-button"
                onClick = {(e) => {
                    e.preventDefault();
                    postSignup()
                    }
                } >
                Sign-In
            </button>
    </form>
    </div>

    )
  }

  export default SignUpForm