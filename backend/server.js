// server.js or index.js
import { pool } from './db.js';
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors());

app.get('/home', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).json({ status: 'OK', data: result.rows })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));