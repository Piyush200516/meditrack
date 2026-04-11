require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

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

/* SERVER START */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
