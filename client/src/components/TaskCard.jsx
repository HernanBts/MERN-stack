import { useTasks } from '../context/TaskProvider'

function TaskCard( {task} ) {
    const {deleteTask} = useTasks();


    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done ? "✔️" : "❌"}</span>
        <span>{task.createdAt}</span>
        <button onClick={() => deleteTask(task.id)}>delete</button>
        <button>edit</button>
      </div>
    )
}

export default TaskCard