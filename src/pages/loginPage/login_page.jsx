import { useState } from "react"
// import APIService from '../APIService'

import './loginPage.css'

export const LoginPage = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const loginBtn = () => {
    //     APIService.LoginUser({email,password})
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
    // }


    return (
        <div className='login-wrapper'>
        <h1 className='font-header'> log into my gymrat</h1>
    <div>
      <form >
      <label>
          <p className='font-elements'>EMAIL-ADDRESS</p>
          <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value )} required/>
      </label>
      <label>
          <p className='font-elements'>PASSWORD</p>
          <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value )}/>
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