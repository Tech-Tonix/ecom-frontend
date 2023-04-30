import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login-wrapper'>
    <h1 className='font-header'> log into my gymrat</h1>
<div>
  <form >
  <label>
      <p className='font-elements'>EMAIL-ADDRESS</p>
      <input type='email'/>
  </label>
  <label>
      <p className='font-elements'>PASSWORD</p>
      <input type="password"/>
    </label>
  </form>
  <button className='button-style center-button' type='submit'>log in</button>
  <div className='container-one'>
    <p className='no-acc'>You don't have an account?</p>
    <p className='signup'>Sign Up.</p>
  </div>
</div>
</div>
  )
}

export default Login;
