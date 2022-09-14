import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'

const RequireAuth = ({children}) => {
  const {pathname}=useLocation()
  const isAuth=useSelector((state)=>state.AuthReducer.token)
   

  if(!isAuth){
    return <Navigate to="/login"/>
  }
  return (
    <div>
      {children}
    </div>
  )
  
}

export default RequireAuth