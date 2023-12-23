import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { postFailure, postRequest, postSuccess, todoFail, todoRequest, todoSuccess } from '../redux/action'
export const Todos = () => {
  const dispatch = useDispatch()
  const [state,setState] = useState()
  const {todos,isLoading} = useSelector((store)=>{
    console.log(store)
    return {
      todos:store.todos,
      isLoading:store.isLoading
    }
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

  const handleAddTodo=(input)=>{
    console.log(input)
    const Newtodo={
      title: input,
      status: false
    }
    dispatch(postRequest())
    axios.post("http://localhost:8080/todos",Newtodo).then((res)=>{
      //dispatch()--request action
      console.log(res)
      getData()
    }).catch((res)=>{
      //dispatch()---failure
      dispatch(postFailure())
      console.log(res)
    })
  }
  if(isLoading){
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <>
        <TodoInput AddTodo={handleAddTodo} />
        <h1>Todo List</h1>
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
