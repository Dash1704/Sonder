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
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            /> 

            <label htmlFor="password">Password</label>
            <input type="text" 
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />

            <input type="submit"
                onClick = {() => postSignup()} 
            />
    </form>
    </div>

    )
  }

  export default SignupForm