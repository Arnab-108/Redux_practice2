import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { todoFail, todoRequest, todoSuccess } from '../redux/action'
export const Todos = () => {
  const dispatch = useDispatch()
  const [state,setState] = useState()
  const {todos,isLoading} = useSelector((store)=>{
    console.log(store)
    return store
  })

  const getData=()=>{
      dispatch(todoRequest())
      axios.get("http://localhost:8080/todos").then((res)=>{
        dispatch(todoSuccess(res.data))
        console.log(res)
      }).catch((err)=>{
        dispatch(todoFail())
        console.log(err)
      })
  }

  useEffect(()=>{
    getData()
  },[])

  if(isLoading){
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <>
        <TodoInput />
        {
          todos?.map((el)=>(
            <>
              <div key={el.id}>
                <p>{el.title}----{el.status? "Completed":"Not Completed"}</p>
              </div>
            </>
          ))
        }
    </>
  )
}
