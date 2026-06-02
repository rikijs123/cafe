import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'

let db: any = null

export async function getDatabase() {
  if (db) return db

  db = await open({
    filename: path.join(process.cwd(), 'cafe.db'),
    driver: sqlite3.Database
  })

  // Enable foreign keys
  await db.exec('PRAGMA foreign_keys = ON')

  return db
}

export async function initializeDatabase() {
  const database = await getDatabase()

  // Create tables
  await database.exec(`
    CREATE TABLE IF NOT EXISTS menu (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      category TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS hours (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day TEXT NOT NULL,
      open_time TEXT,
      close_time TEXT
    );

    CREATE TABLE IF NOT EXISTS gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image_url TEXT NOT NULL,
      title TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      content TEXT NOT NULL,
      rating INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contact (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      phone TEXT,
      address TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `)
}

export default getDatabase