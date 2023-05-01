import React, { useContext, useState } from "react";
import "./login.css";
import {CurrentUser} from "../../contexts/CurrentUser"

function Login() {

  const { setCurrentUser } = useContext(CurrentUser)
  const [credentials, setCredentials ] = useState({
    email: '',
    password: ''
  })  
  const [error, setError] = useState(null)

  async function sendForm(e) {
    e.preventDefault()
    const response = await fetch(`/api/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (response.status === 200) {
      setCurrentUser(data.user)
      localStorage.setItem('token', data.token)
    }
    else {
      setError(data.error)
    }
  }

  return (
    <div className="login-form-container">
      <form onSubmit={sendForm}>
        <h2>Sign In</h2>
        {
          error ? (<h4>{error}</h4>) : null
        }
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
        <br />
        <h6>Dont have an account?</h6>
    <a href="./signup">Sign Up</a>
      </form>
    </div>
  );
}

export default Login;