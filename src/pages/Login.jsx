import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleloginEmail, handleloginfailure, handleloginpassword, handleloginrequest, handleloginsuccess } from '../Redux/AuthReducer/action'

const Login = () => {
   
    const [logincred,setLogincred]=useState({})
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.AuthReducer)
  const navigate=useNavigate()

    const handleloginchange=(e)=>{
        const {name,value}=e.target;
        setLogincred({...logincred,
            [name]:value})
            
    }

    function handlelogin(){
        dispatch(handleloginEmail(logincred.email))
        dispatch(handleloginpassword(logincred.password))
        dispatch(handleloginrequest())
        const payload={
            email:logincred.email,
            password:logincred.password,
        }
        axios.post("https://reqres.in/api/login",payload)
        .then((r)=>{
             dispatch(handleloginsuccess(r.data.token))
             navigate("/")
            

        })
        .catch((e)=>{
            dispatch(handleloginfailure(e))
        })
    }

   if(state.isLoading){
   return  <div>...Loading</div>
   }

  return (
    <div>
        <br />
        <br />
        <div>
            <label >Email</label>
            <input type="email" name="email"
            onChange={handleloginchange} />
        </div>
        <br />
        <div>
            <label >password</label>
            <input type="password" onChange={handleloginchange}
            name="password" />
        </div>
        <br />
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login