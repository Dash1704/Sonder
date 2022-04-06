import React, {useState} from 'react';

const SignUpForm = () => {
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
        .then(data => console.log(data))
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

            <input type="submit"
                data-testid="signup-button"
                onClick = {() => postSignup()} 
            />
    </form>
    </div>

    )
  }

  export default SignUpForm