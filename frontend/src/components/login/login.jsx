import React, { useState } from "react";
import "./login.css";
import logo from '../../images/logo.png';

function Login() {
  return (
    <div className="login-form-container">
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
        <img  src={logo} alt="Logo" className="logo"/>
      </form>
    </div>
  );
}

export default Login;
