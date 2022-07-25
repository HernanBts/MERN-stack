import express from "express";  
import {PORT} from "./config.js";
import ping from "./routes/index.routes.js";

const app = express();

app.use(ping);
app.listen(PORT);
console.log(`Server run in port: ${PORT}`);
