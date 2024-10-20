import React from 'react'
import { useState } from "react";

const ToDoList = () => {

    const [task,setTask] = useState([]);
    const[inputValue, setInputValue]= useState("");
    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim())
        {
            setTask([... task, inputValue])
            setInputValue("");
        }
    }

    const handleChange = (e) => {

        setInputValue(e.target.value)
    }
  return (
    <div>
        <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value = {inputValue} onChange ={handleChange} placeholder='enter a task'/>
        <button type='submit'>Add Task</button>
        
      </form>
      <ul>
        {task.map((t,index)=>(
            <li key={index}>{t}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default ToDoList
