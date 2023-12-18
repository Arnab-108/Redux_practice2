import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, sub } from '../redux/action'

export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>{
        console.log(state)
        return state.Counter
    })
    const handleAdd=()=>{
        dispatch(add(1))
    }

    const handleReduce=()=>{
        dispatch(sub(1))
    }
  return (
    <>
        <h1>Counter:{count}</h1>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReduce}>-</button>
    </>
  )
}
