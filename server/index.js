import express, { json } from "express";  
import {PORT} from "./config.js";
import ping from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


const app = express();

app.use(express.json());
app.use(ping);
app.use(tasksRoutes);

app.listen(PORT);
console.log(`Server run in port: ${PORT}`);
