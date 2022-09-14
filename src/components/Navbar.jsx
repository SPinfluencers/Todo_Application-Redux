import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeData } from '../utils/localstorage'

const Navbar = () => {
 const status=useSelector((state)=>state.AuthReducer.isAuth)
   function handlelog(){
    if(status){
      removeData("token")
    }
   }
  return (
    <div>
        <Link to="/login"><button onClick={handlelog}>{status?"Logout":"Login"}</button></Link>
    </div>
  )
}

export default Navbar