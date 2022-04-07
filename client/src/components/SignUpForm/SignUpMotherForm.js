import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import M from 'materialize-css';

const SignUpMotherForm = () => {
    const navigation = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const postSignup = () => {
        fetch("/users", {
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
            <label htmlFor="password">City</label>
            <input type="text" 
                data-testid="password"
                value={city}
                onChange = {(e) => setCity(e.target.value)}
            />

            <button
                data-testid="signup-button"
                onClick = {(e) => {
                    e.preventDefault();
                    postSignup()
                    }
                } >
                Sign-Up
            </button>
    </form>
    </div>

    )
  }

  export default SignUpMotherForm