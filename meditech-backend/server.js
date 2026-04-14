require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const { pool } = require("./db");

const app = express();

// Required middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Mount auth routes - THIS FIXES the 404 HTML error (routes now at /api/login via Router)
app.use('/api', require('./routes/auth'));

// Health check root
app.get("/", (req, res) => {
  res.json({ message: "Server Running ✅ Backend restructured!" });
});

// API health check
app.get('/api/healthz', (req, res) => {
  res.json({ status: 'OK', db: 'meditech connected' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 Login endpoint: POST http://localhost:${PORT}/api/login`);
});

