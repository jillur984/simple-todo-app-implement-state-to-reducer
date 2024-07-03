import React, { useState } from 'react'
import { useReducer } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { initialTasks } from './components/data/tasks'
import taskReducer from './Reducers/taskReducer'

export default function App() {

  const [tasks,dispatch]=useReducer(taskReducer,initialTasks)

  const getNextId=(data)=>{
    const maxId=data.reduce((prev,current)=> prev.id > current.id ? prev.id : current.id)
    return maxId+1
  }

  const handleAddTask=(text)=>{
    dispatch({
      type:"added",
      text:text,
      id:getNextId(tasks)
    })
  }

  const handleChangeTask=(task)=>{
    dispatch({
      type:"changed",
      task:task
    })
  }

  const handleDeletetask=(taskId)=>{
   dispatch({
    type:"deleted",
    id:taskId
   }
  )
  }
  return (
    <>
    <h1>To Add App</h1>
   <AddTask onAdd={handleAddTask}/>
   <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeletetask}/>
    
    </>
  )
}
