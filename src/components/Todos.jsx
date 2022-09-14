import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { gettodofailed, gettodorequest, gettodosucess } from '../Redux/TodoReducer/action'
import Todoinput from './Todoinput'
import { Link } from 'react-router-dom'
import "./todo.css"


const Todos = () => {
    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.TodoReducer.todo)
   

    const getTodo=()=>{
       dispatch(gettodorequest())
       axios.get(" http://localhost:8080/todo")
       .then((r)=>{
        dispatch(gettodosucess(r.data))
       })
       .catch((e)=>{
        dispatch( gettodofailed())
       }) 
    }


    function toggletodo(id,newstatus){
      dispatch(gettodorequest())
      axios({
         url:`http://localhost:8080/todo/${id}`,
      method:"PATCH",
        data:{
         status:newstatus
        }
      })
      .then((r)=>{
          getTodo()
      })
      .catch((e)=>{
       dispatch( gettodofailed())
      }) 
    }

    function deletetodo(id){
      axios({
         url:`http://localhost:8080/todo/${id}`,
         method:"DELETE"
        })
        .then((r)=>{
         getTodo()
        })
    }

    useEffect(()=>{
       getTodo()
    },[])


  return (
    <div>
        <Todoinput getTodo={getTodo}/>
       { todos &&
        todos.map((item)=>(
      
            <div key={item.id} 
            style={{display:"flex",
            gap:"1rem",
            justifyContent:"center",
            alignItems:"center",
            border:"1px solid black" ,
            marginBottom:"5px"
           }}>
            <h2 >{item.title}</h2>
            <h3 className={item.status?"green":"red"}>{item.status?"Completed":"Pending"}</h3>
            <button onClick={()=>toggletodo(item.id,!item.status)}>Toggle</button>
            <Link to={`/todo/${item.id}`}>More Details</Link>
            <button onClick={()=>deletetodo(item.id)}>Delete Todo</button>
            </div>
            
        ))
       }
    </div>
  )
}

export default Todos