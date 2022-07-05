import React, { useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
  const url = 'http://localhost:3000/api/oauth/token'
  const oauthData = {
    'grant_type': 'password',
    'client_id': 'MFXPfhYuBaSECk3u8B-ZE0fF3rAXHTdS4UF1qXNegtA',
    'client_secret': '3udBnd9IWMTBA-f2VsB4IrufTRjkgEXhsEP6WHhQmS4'
  }
  const headers = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const reqBody = {...oauthData, ...credentials}

  return axios.post(url, reqBody, headers).then(response => response.data).catch(error => {
    console.log(error);
  });
} 

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password
    });
    setUser(data)
  }

  return (
    <div className='login-wrapper'>
      <h1> Please Log In </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type='text' onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login;