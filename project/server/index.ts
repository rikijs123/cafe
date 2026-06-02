import express from 'express'
import authRoutes from './routes/auth'
import publicRoutes from './routes/public'
import authMiddleware from './middleware/auth'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Public routes
app.use('/api/public', publicRoutes)

// Auth routes
app.use('/api/auth', authRoutes)

// Protected routes
app.use('/api/admin', authMiddleware, async (req, res) => {
  res.json({ message: 'Admin panel access granted' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})