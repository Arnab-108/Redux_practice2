import React, { useState } from 'react'

export const TodoInput = ({AddTodo}) => {
    const [input,setInput] = useState("")
    // console.log(input)

    const handleAddTodo=()=>{
        AddTodo(input)
        setInput("")
    }
  return (
    <>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Add Todos' />
        <button onClick={handleAddTodo}>Add Todos</button>
    </>
  )
}
