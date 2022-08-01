import axios from 'axios'

export const getTasksRequest = async () => 
    await axios.get('http://localhost:3000/api/tasks')

export const getTaskRequest = async (taskId) =>
    await axios.get(`http://localhost:3000/api/task/${taskId}`)

export const createTaskRequest = async (task) =>
    await axios.post('http://localhost:3000/api/task', task)

export const updateTaskRequest = async (taskId, values) => 
    await axios.put(`http://localhost:3000/api/task/${taskId}`, values)

export const changeDoneTaskRequest = async (taskId, done) => 
    await axios.put(`http://localhost:3000/api/task/${taskId}`, { done, });

export const deleteTaskRequest = async (taskId) =>
    await axios.delete(`http://localhost:3000/api/task/${taskId}`)
