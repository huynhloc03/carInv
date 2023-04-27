import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="authentication">
      <h1>Login</h1>
      <form>
        <input type = "text" placeholder='username' />
        <input type = "password" placeholder='password'/>
        <button>Login</button>
        <p>Incorrect input.</p>
        <span>Click here to create an account! <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login