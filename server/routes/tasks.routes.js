import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controller/tasks.controller.js";

const router = Router();

router.get('/api/tasks', getTasks);
router.get('/api/task/:id', getTask);
router.post('/api/task', createTask);
router.put('/api/task/:id', updateTask);
router.delete('/api/task/:id', deleteTask);

export default router;