import { Router } from 'express'
import { getDatabase } from '../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const menu = await db.all('SELECT * FROM menu')
    const hours = await db.all('SELECT * FROM hours')
    const testimonials = await db.all('SELECT * FROM testimonials')

    res.json({
      menu,
      hours,
      testimonials
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})

router.get('/menu', async (req, res) => {
  try {
    const db = await getDatabase()
    const menu = await db.all('SELECT * FROM menu')
    res.json(menu)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu' })
  }
})

router.get('/hours', async (req, res) => {
  try {
    const db = await getDatabase()
    const hours = await db.all('SELECT * FROM hours')
    res.json(hours)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hours' })
  }
})

router.get('/testimonials', async (req, res) => {
  try {
    const db = await getDatabase()
    const testimonials = await db.all('SELECT * FROM testimonials')
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

export default router