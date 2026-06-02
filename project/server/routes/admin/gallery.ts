import { Router } from 'express'
import { getDatabase } from '../../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const gallery = await db.all('SELECT * FROM gallery')
    res.json(gallery)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gallery' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { image_url, title } = req.body
    const db = await getDatabase()
    
    const result = await db.run(
      'INSERT INTO gallery (image_url, title) VALUES (?, ?)',
      [image_url, title]
    )
    
    res.json({ id: result.lastID, image_url, title })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add gallery image' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const db = await getDatabase()
    
    await db.run('DELETE FROM gallery WHERE id = ?', [id])
    
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete gallery image' })
  }
})

export default router