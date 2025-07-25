// index.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

try {
  const db = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.MYSQL_PASSWORD
  });

  console.log('✅ Connected to MySQL');

  // 1️⃣ Create a database if it doesn't exist
  await db.query(`CREATE DATABASE IF NOT EXISTS projectDB`);
  console.log('📁 Created or verified "projectDB"');

  // 2️⃣ Use the new database
  await db.query(`USE projectDB`);

  // 3️⃣ Create a Users table
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 4️⃣ Create a Devices table
  await db.query(`
    CREATE TABLE IF NOT EXISTS devices (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      device_name VARCHAR(100),
      device_type VARCHAR(50),
      registered_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // 5️⃣ Create a Contacts table
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      contact_name VARCHAR(100),
      contact_number VARCHAR(20),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  console.log('✅ All tables created and ready to use');

} catch (error) {
  console.error(' MySQL connection error:', error.message);
}
