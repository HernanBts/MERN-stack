import { createContext, useContext, useState } from "react";
import { getTasksRequest, getTaskRequest, deleteTaskRequest, createTaskRequest, updateTaskRequest } from "../api/tasks.api";
import { TaskContext } from './TaskContext'

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must ne use within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const respose = await getTasksRequest();
    setTasks(respose.data);
  };

 const deleteTask = async (taskId) => {
    try {
      const response = await deleteTaskRequest(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (taskId) => {
    try {
      const response = await getTaskRequest(taskId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (taskId, values) => {
    try {
      const response = await updateTaskRequest(taskId, values);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
