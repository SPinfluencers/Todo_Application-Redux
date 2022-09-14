import React from 'react'
import Navbar from '../components/Navbar'
import Todoinput from '../components/Todoinput'
import Todos from '../components/Todos'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Todos/>
    </div>
  )
}

export default Homepage