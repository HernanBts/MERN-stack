import axios from 'axios'

export const getTasksRequest = async () => 
    axios.get('http://localhost:3000/api/tasks')

export const createTaskRequest = async (task) =>
    axios.post('http://localhost:3000/api/task', task)

export const deleteTaskRequest = async (taskId) =>
    axios.delete(`http://localhost:3000/api/task/${taskId}`)
