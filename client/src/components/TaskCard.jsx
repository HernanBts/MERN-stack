import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskProvider'

function TaskCard( {task} ) {
    const {deleteTask} = useTasks();
    const navigate = useNavigate();

    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done ? "✔️" : "❌"}</span>
        <span>{task.createdAt}</span>
        <button onClick={() => deleteTask(task.id)}>delete</button>
        <button onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
      </div>
    )
}

export default TaskCard