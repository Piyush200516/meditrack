-- MediTech Database Schema
-- Run this in MySQL workbench/phpMyAdmin

CREATE DATABASE IF NOT EXISTS meditech;
USE meditech;

-- Keep existing users table if needed for other features
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('patient', 'doctor', 'admin', 'hospital', 'super') DEFAULT 'patient',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- REQUIRED: patients table for login (id, name, email, password)
CREATE TABLE IF NOT EXISTS patients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Sample patient data (plain password: password123)
INSERT INTO patients (name, email, password) VALUES 
('Test Patient', 'test@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE name=name;

-- Sample user data for login (plain password: password123) - bcrypt hash
INSERT INTO users (name, email, password) VALUES 
('Test User', 'test@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE name=name;

-- Verify tables have data
SELECT 'users table:' as table_name, COUNT(*) as row_count FROM users
UNION ALL
SELECT 'patients table:' as table_name, COUNT(*) as row_count FROM patients;

-- Verify patients table
SELECT * FROM patients;
-- Expected: id=1, name='Test Patient', email='test@test.com', password=hash
