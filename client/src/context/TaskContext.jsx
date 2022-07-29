import { createContext, useContext, useState} from "react";
import { getTasksRequest } from '../api/tasks.api'

export const TaskContext = createContext();