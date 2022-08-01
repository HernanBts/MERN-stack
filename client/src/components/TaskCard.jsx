import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskProvider'

function TaskCard({task} ) {
    const {deleteTask, updateTask} = useTasks();
    const navigate = useNavigate();

    const handleDone = async (done) => {
      await updateTask(task.id, done === 0 ? true : false);
    };

    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done ? "✔️" : "❌"}</span>
        <span>{task.createdAt}</span>
        <button onClick={() => deleteTask(task.id)}>delete</button>
        <button onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
        <button onClick={() => handleDone(task.done)}>change done</button>
      </div>
    )
}

export default TaskCard