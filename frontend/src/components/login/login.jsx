import React, { useState } from "react";
import "./login.css";

function Login() {

  const [credentials, setCredentials ] = useState({
    email: '',
    password: ''
  })  

  async function sendForm(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:3001/api/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    console.log(data)
  }


  return (
    <div className="login-form-container">
      <form onSubmit={sendForm}>
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={e => setCredentials({ ...credentials, email: e.target.value })}   
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
