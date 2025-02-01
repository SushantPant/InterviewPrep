import React, { useState } from 'react'

const TodolistCode = () => {
    const [newInput, setNewInput]= useState("")
    const [newInputArray, setNewInputArray]= useState([])
    const handleTaskCreate = ()=>{
        if(newInput){
            setNewInputArray([...newInputArray, newInput])
            setNewInput("")
        }
        }
    const handleDelete = (i)=>{
       setNewInputArray(newInputArray.filter((value, index)=>
            index !== i
        )
    )
    }
    const handleUpdate = (i) => {
        const updatedValue= prompt("Enter new value", newInputArray[i])
        if(updatedValue){
        setNewInputArray(newInputArray.map((value, index)=>(
            index ===i?updatedValue:value
        )))
    }
    else{
        alert("Error: Blank update text")
    }
}
  return (
    <div>
      <input
            type='text'
            value={newInput}
      onChange={(e)=>setNewInput(e.target.value)}
      />
      <button onClick={handleTaskCreate}>Add</button>
      <ol>
        {newInputArray.map((value,i)=>(
            <li key={i}>{value} <button onClick={() => handleDelete(i)}>Delete</button> <button onClick={() => handleUpdate(i)}>Update</button>
            </li>
            
        ))}
        </ol>
    </div>
  )
}

export default TodolistCode
