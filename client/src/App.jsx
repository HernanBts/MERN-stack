import {Routes, Route} from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskForm from './pages/TaskForm';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
