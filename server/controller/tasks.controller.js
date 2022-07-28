import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM tasks ORDER BY createdAt ASC'
            );
        return res.json(result);
        // res.send('getting tasks...');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM tasks WHERE id = ? ORDER BY createdAt ASC',
            [req.params.id]
            );
        if (result.length === 0) 
            return res.status(404).json({ message: "Task not found."});

        return res.json(result[0]);
        //res.send('getting task...');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    try {
        const {title, description} = req.body;
        const [result] = await pool.query(
            'INSERT INTO tasks(title, description) VALUES (?, ?)',
            [title, description]);
        return res.json({
            id: result.insertId,
            title,
            description
        });
        //res.send('creating task...');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const [result] = await pool.query(
            'UPDATE tasks SET ? WHERE id = ?',
            [req.body, req.params.id]
            );
        if (result.length === 0) 
            return res.status(404).json({ message: "Task not found."});    
        return res.json(result[0]);
        //res.send('updateing task...');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    // const {title, description} = req.body;
};
export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM tasks WHERE id = ?',
            [req.params.id]
            );
        if (result.affectedRows === 0) 
            return res.status(404).json({ message: "Task not found."});
        return res.sendStatuts(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}