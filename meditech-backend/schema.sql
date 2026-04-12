-- MediTech Database Schema
-- Run this in MySQL after creating 'meditrack' database

CREATE DATABASE IF NOT EXISTS meditrack;
USE meditrack;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
role ENUM('patient', 'doctor', 'admin', 'hospital', 'super') DEFAULT 'patient',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data (password: 'password123' hashed)
INSERT INTO users (name, email, password, role) VALUES 
('John Doe', 'john@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'patient') 
ON DUPLICATE KEY UPDATE name=name;

-- Verify
SELECT * FROM users;
