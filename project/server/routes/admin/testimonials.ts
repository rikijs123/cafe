import { Router } from 'express'
import { getDatabase } from '../../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const testimonials = await db.all('SELECT * FROM testimonials')
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, content, rating } = req.body
    const db = await getDatabase()
    
    const result = await db.run(
      'INSERT INTO testimonials (name, content, rating) VALUES (?, ?, ?)',
      [name, content, rating]
    )
    
    res.json({ id: result.lastID, name, content, rating })
  } catch (error) {
    res.status(500).json({ error: 'Failed to create testimonial' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const db = await getDatabase()
    
    await db.run('DELETE FROM testimonials WHERE id = ?', [id])
    
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' })
  }
})

export default router