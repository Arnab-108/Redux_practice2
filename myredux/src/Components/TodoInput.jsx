import React, { useState } from 'react'

export const TodoInput = () => {
    const [input,setInput] = useState("")
    // console.log(input)

    const handleAddTodo=()=>{
        console.log(input)
        setInput("")
    }
  return (
    <>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Add Todos' />
        <button onClick={handleAddTodo}>Add Todos</button>
    </>
  )
}
