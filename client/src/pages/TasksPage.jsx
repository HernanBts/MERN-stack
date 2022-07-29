import {useEffect} from 'react'
import {useTasks} from '../context/TaskContext'
import TaskCard from '../components/TaskCard'

function TasksPage() {
    const { tasks, loadTasks } = useTasks();
  
    useEffect(() => {
      loadTasks();
    }, [])
    
    function renderTasks() {
        if (tasks.length === 0) return <h2>You dont have tasks...</h2>
        return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    } 

    return (
        <div>
            <h1>My Tasks</h1>
            {renderTasks()}
        </div>
    )
}

export default TasksPage