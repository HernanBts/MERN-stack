import { pool } from "../db.js";

export const getTasks = (req, res) => {
    res.send('getting tasks...');
};
export const getTask = (req, res) => {
    res.send('getting task...');
};

export const createTask = async (req, res) => {
    const {title, description} = req.body;
    const [result] = await pool.query(
        'INSERT INTO tasks(title, description) VALUES (?, ?)',
        [title, description]);
    res.json({
        id: result.insertId,
        title,
        description
    });
    res.send('creating task...');
};

export const updateTask = (req, res) => {
    res.send('updateing task...');
};
export const deleteTask = (req, res) => {
    res.send('deleting task...');
};