import { createContext, useContext, useState} from "react";
import { getTasksRequest } from '../api/tasks.api'

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must ne use within a TaskContextProvider")
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    const respose = await getTasksRequest()
    setTasks(respose.data)
  }   

  return (
    <TaskContext.Provider value={{ tasks, loadTasks }} >
      {children}
    </TaskContext.Provider>
  )
}
