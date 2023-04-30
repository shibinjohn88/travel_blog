import React, { useContext, useState } from "react";
import "./signup.css";
import {CurrentUser} from "../../contexts/CurrentUser"

function Signup() {

  const { setCurrentUser } = useContext(CurrentUser)
  const [credentials, setCredentials ] = useState({
    email: '',
    password: ''
  })  
  const [error, setError] = useState(null)

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

    if (response.status === 200) {
      setCurrentUser(data.user)
    }
    else {
      setError(data.error)
    }
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={sendForm}>
        <h2>Create an Account</h2>
        {
          error ? (<h4>{error}</h4>) : null
        }
        <div className="form-group">
            <div>
        <label htmlFor="email">Username:</label>
          <input
            type="username"
            required
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={e => setCredentials({ ...credentials, username: e.target.value })}   
          />
        </div>
        <br />
        <div>
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
       <br />
       <div>
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
          <br />
          <div>
<label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <br />
        <button type="submit">Create Account</button>
        </div>
        <br />
        <hr />
        <h6>Already have an account?</h6>
    <a href="./login">Sign in</a>
      </form>
    </div>
  );
}

export default Signup;