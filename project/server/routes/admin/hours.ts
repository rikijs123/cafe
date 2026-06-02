import { Router } from 'express'
import { getDatabase } from '../../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const hours = await db.all('SELECT * FROM hours')
    res.json(hours)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hours' })
  }
})

router.put('/:day', async (req, res) => {
  try {
    const { day } = req.params
    const { open_time, close_time } = req.body
    const db = await getDatabase()
    
    await db.run(
      'UPDATE hours SET open_time = ?, close_time = ? WHERE day = ?',
      [open_time, close_time, day]
    )
    
    res.json({ day, open_time, close_time })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hours' })
  }
})

export default router