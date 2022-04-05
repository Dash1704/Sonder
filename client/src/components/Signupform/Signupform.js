import React, {useState} from 'react';

const SignupForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const postSignup = () => {
        fetch("https://localhost:8080/users", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (

    <div>
        <h1>EMAIL</h1>
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
                onClick = {() => postSignup()} 
            />
    </form>
    </div>

    )
  }

  export default SignupForm