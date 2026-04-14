const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { pool } = require('../db');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.execute(
'SELECT * FROM users WHERE email = LOWER(?)', 
      [email.trim()]
    );
    console.log('Login attempt for:', email);
    
    if (rows.length === 0) {
      console.log('User not found for email:', email);
      return res.status(401).json({ message: 'User not found' });
    }
    
    const user = rows[0];
    console.log('User found:', user.email);
    const match = await bcrypt.compare(password, user.password);
    console.log('Password match result:', match);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    
    console.log('Login successful for:', user.email);
    res.json({ 
      message: 'Login successful',
      user: {
        id: user.id, 
        name: user.name, 
        email: user.email 
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert patient
    const [result] = await pool.execute(
'INSERT INTO users (name, email, password) VALUES (?, LOWER(?), ?)',
      [name.trim(), email.trim(), hashedPassword]
    );
    
    console.log('User registered:', result.insertId);
    res.status(201).json({ 
      message: 'User registered successfully',
      userId: result.insertId 
    });
  } catch (err) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
