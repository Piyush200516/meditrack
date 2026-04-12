require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ TEST API */
app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

/* ✅ DB TEST API */
app.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) {
      return res.send("❌ DB Not Connected");
    }
    res.send("✅ DB Connected Successfully");
  });
});

/* REGISTER ROUTE */
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role = 'patient' } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    console.log("📝 Registration attempt:", { name, email, role });

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.error("❌ DB Error:", err);
        return res.status(500).json({ error: "Server error" });
      }
      if (results.length > 0) {
        return res.status(409).json({ error: "Email already registered" });
      }

      const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

      db.query(sql, [name, email, hashedPassword, role], (err, result) => {
        if (err) {
          console.error("❌ Insert Error:", err);
          return res.status(500).json({ error: "Registration failed" });
        }
        console.log("✅ User registered ID:", result.insertId);
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  } catch (error) {
    console.error("❌ Register Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/* LOGIN ROUTE */
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    console.log("🔐 Login attempt for:", email);

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.error("❌ DB Error:", err);
        return res.status(500).json({ error: "Server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const user = results[0];

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECRET || "fallback_secret",
          { expiresIn: "1h" }
        );

        console.log("✅ Login successful:", email);
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
      });
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/* SERVER START */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

