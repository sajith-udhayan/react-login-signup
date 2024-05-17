import React, { useState } from 'react'
import './LoginSignup.css'


const LoginSignup = () => {

    const [action,setAction]= useState("Sign Up");

  return (
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className='underline'></div>

      </div>
      <div className='inputs'>
        {action=="Login"?<div></div>: <div className='input'>
        <i class="fa-solid fa-user"></i>
            <input type="text" placeholder='Name' />
        </div>}
        
        <div className='input'>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder='Email id' />
        </div>
        <div className='input'>
            <i class="fa-solid fa-key"></i>
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Passowrd?<span>Click here!</span></div>
}
      <div className='submit-container'>
        <div className={action==="Login"?"submit grey":"submit"}onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":"submit"}onClick={()=>{setAction("Login")}}> Login</div>

      </div>
    </div>
  )
}

export default LoginSignup
