import {Routes, Route} from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/create" element={<TaskForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
