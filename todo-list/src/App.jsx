
import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskWindow from './components/TaskWindow'

function App() {

  const [task, setTask] = useState([])


  const addTask = (task) => {

    if (!task.trim()){
      alert('task name cannot be empty');
    }

    setTask((prevTask) => [...prevTask, task])
    
    
  }

  const deleteTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index))
  }

  return (
    <div>
      <TaskWindow task={task} deleteTask={deleteTask} />
      <TaskInput addTask={addTask} />
    </div>
  )
}

export default App
