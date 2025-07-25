

import express from 'express';

const router = express.Router();

router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    try {
        const [result] = await pool.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );
        console.log('User inserted:', { id: result.insertId, name, email });
        res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
        console.error('Error inserting user:', error.message);
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Email already exists.' });
        } else {
            res.status(500).json({ error: 'Database error.' });
        }
    }
});

// GET /users - Get all users
router.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        console.log('Fetched users:', rows);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Database error.' });
    }
});

export default router;