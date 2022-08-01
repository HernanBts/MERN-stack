import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskProvider'

function TaskCard({task} ) {
    const {deleteTask, updateTask} = useTasks();
    const navigate = useNavigate();

    const handleDone = async (done) => {
      await updateTask(task.id, done === 0 ? true : false);
    };

    return (
      <div className='bg-zinc-800 rounded-md p-4 text-white'>
        <header className='flex justify-between'>
          <h2 className='text-xl font-bold'>{task.title}</h2>
          <button onClick={() => handleDone(task.done)}>{task.done ? "✅" : "❌"}</button>
        </header>
        <p className='text-xs'>{task.description}</p>
        <footer className='flex justify-between'>
          <span>{task.createdAt}</span>
          <div className='flex gap-x-1 flex'>
            <button className='bg-red-400 px-2 py-1 rounded-md' onClick={() => deleteTask(task.id)}>🗑️</button>
            <button className='bg-yellow-400 px-2 py-1 rounded-md' onClick={() => navigate(`/edit/${task.id}`)}>📝</button>
          </div>
        </footer>
      </div>
    )
}

export default TaskCard