import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    <>
      <div className="auth-form-container">
        <h2>Create Account</h2>
        <button type="submit">Sign up with google</button>
        <button type="submit">Sign up with Facebook</button>
        <p>-OR-</p>
        <form className="login-form">
       
          <input
            type="name"
            placeholder="Full Name"
            id="name"
            name="fullName"
          />
         
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />

          
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        
            <button type="submit">Create Account</button>
        
        </form>

          <button className="link-btn">
           Already have an account? <a href="www.facebook.com">Login.</a>
          </button>
     
      </div>
      
    </>
  };
