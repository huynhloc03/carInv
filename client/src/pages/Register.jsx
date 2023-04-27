import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
const Register = () => {
  const [inputs, setInputs] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
  })
  const [err,setError] = useState(null)
  const nav = useNavigate()
  const change = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const submit = async (e) => {
    e.preventDefault()
    try{
    await axios.post("/authentication/register",inputs)
    nav("/login")
    }catch(err){
      setError(err.response.data)
    }
  }
  return (
    <div className="authentication">
      <h1>Register</h1>
      <form>
        <input required = "text" placeholder='First name' name ="firstname" onChange={change}/>
        <input required = "text" placeholder='Last name'  name ="lastname" onChange={change}/>
        <input required = "text" placeholder='Username'  name ="username" onChange={change}/>
        <input required = "email" placeholder='Email' name ="email" onChange={change} />
        <input required = "password" placeholder='Password' name ="password" onChange={change}/>
        <button onClick={submit}>Register</button>
        {err &&<p>{err}</p>}
        <span>Click here to create an account! <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register