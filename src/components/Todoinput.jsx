import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { posttodofailed, posttodorequest, posttodosucess } from '../Redux/TodoReducer/action'

const Todoinput = ({getTodo}) => {
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    
    const postTodos=(text)=>{
      const payload={
         title:text,
        status:false
      }
      dispatch(posttodorequest())
      return axios.post("http://localhost:8080/todo",payload)
      .then((r)=>{
        console.log(r.data)
        dispatch(posttodosucess(r.data)) 
            getTodo()
      }) 
      .catch((e)=>{
        dispatch(posttodofailed())
      })
    }
  return (
    <div>
        <h1>Todos</h1>
        <input type="text" 
        placeholder='Write Todos....' 
        onChange={(e)=>setText(e.target.value)}
        />
        <button  onClick={()=>postTodos(text)}>ADD TODO</button>
    </div>
  )
}

export default Todoinput