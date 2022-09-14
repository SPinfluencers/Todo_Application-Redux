import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Todoitem = () => {
    const [data,setData]=useState([])
    const [Text,setText]=useState("")

    const param=useParams()
  console.log(param.id)

    const fetchdata=()=>{
        axios.get(`http://localhost:8080/todo/${param.id}`)
        .then((r)=>{
            console.log(r.data)
            setData([r.data])
        }).catch((e)=>{
            console.log(e)
        })
    }
    function edittodo(text){
      if(text){
        axios({
          url:`http://localhost:8080/todo/${param.id}`,
          method:"PATCH",
          data:{
              title:text
          }
       })
       .then((r)=>{
          fetchdata()
       })
      }
         
    }

    useEffect(()=>{
      fetchdata()
     },[])

  return (
    <div>
        {
        data.map((item)=>(
            <div key={item.id} 
            style={{display:"flex",
            gap:"1rem",
            justifyContent:"center",
            alignItems:"center",
            border:"1px solid black" ,
            marginBottom:"5px"
           }}>
            <h2 >{item.title}</h2>
            <input type="text" 
            placeholder='Change todo' 
            onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>edittodo(Text)}>EDIT</button>
            </div>
            
        ))
       }
    </div>
  )
}

export default Todoitem