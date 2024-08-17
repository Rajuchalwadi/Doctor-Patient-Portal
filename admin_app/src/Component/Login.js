import React, { useState } from 'react'
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const nevigate = useNavigate()
  const handleSubmit=async()=>{
     const login = await axios.post('/add/login',{email,password})
    if(login.data === 'Invalid email or password'){
      alert(login.data)
    }else{
      alert("Login Sucessfully")
      localStorage.setItem('login',JSON.stringify(login.data))
      nevigate('/')
    }
    setEmail('')
    setPassword('')
  }
  return (
    <>
    <div className="flex justify-center align-middle p-40 w-full tables bg-slate-900">
      <form className="p-5 tab bg-slate-800">
        <table cellPadding={10}>
          <tr>
            <td className=" text-white">Email</td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="JhonDoe@gmail.com"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className=" text-white">password</td>
            <td>
              <input
                type="text"
                name="password"
                placeholder="******"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </td>
          </tr>
        </table>
       <div className=" w-full flex justify-center mt-2">
       <button onClick={handleSubmit} type="button" className="tab bg-slate-100 px-2">
          Submit
        </button>
       </div>
        <div className=" mt-2 w-full justify-center flex">
        <p className=" text-white text-sm">
          <Link to={'/register/patient'}>Register as Patenient</Link> / <Link to={'/register/doctor'}>Register as Doctor</Link>
        </p>
        </div>
      </form>
    </div>
  </>
  )
}

export default Login