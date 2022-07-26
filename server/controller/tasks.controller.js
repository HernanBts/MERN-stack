import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    const [result] = await pool.query(
        'SELECT * FROM tasks ORDER BY createdAt ASC'
        );
    res.json(result);
    res.send('getting tasks...');
};
export const getTask = async (req, res) => {
    const [result] = await pool.query(
        'SELECT * FROM tasks WHERE id = ? ORDER BY createdAt ASC',
        [req.params.id]
        );
    if (result.length === 0) 
        return res.status(404).json({ message: "Task not found."});
    
    res.json(result[0]);
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

export const updateTask = async (req, res) => {
    // const {title, description} = req.body;
    const [result] = await pool.query(
        'UPDATE tasks SET ? WHERE id = ?',
        [req.body, req.params.id]
        );
    if (result.length === 0) 
        return res.status(404).json({ message: "Task not found."});    
    res.json(result[0]);
    res.send('updateing task...');
};
export const deleteTask = async (req, res) => {
    const [result] = await pool.query(
        'DELETE FROM tasks WHERE id = ?',
        [req.params.id]
        );
    if (result.affectedRows === 0) 
        return res.status(404).json({ message: "Task not found."});
    return res.sendStatuts(204);
}