import {Routes, Route} from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskForm from './pages/TaskForm';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar />
      <div className="container p-10 text-start">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
