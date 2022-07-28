import {deleteTaskRequest} from '../api/tasks.api'

function TaskCard( {task} ) {
    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTaskRequest(taskId)
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done ? "✔️" : "❌"}</span>
        <span>{task.createdAt}</span>
        <button onClick={() => handleDeleteTask(task.id)}>delete</button>
        <button>edit</button>
      </div>
    )
}

export default TaskCard