import React from 'react'
import { Route,Routes } from 'react-router-dom'
import RequireAuth from '../HOC/RequireAuth'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Todoedit from '../pages/Todoedit'
import Todoitem from '../pages/Todoitem'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<RequireAuth>
            <Homepage/>
            </RequireAuth>}/>
            <Route path="/todo/:id" element={<Todoitem/>}/>
            <Route path="/todo/:id/edit" element={<Todoedit/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes