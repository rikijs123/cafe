import { Router } from 'express'
import { getDatabase } from '../../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const contact = await db.get('SELECT * FROM contact LIMIT 1')
    res.json(contact || {})
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact' })
  }
})

router.put('/', async (req, res) => {
  try {
    const { email, phone, address } = req.body
    const db = await getDatabase()
    
    await db.run(
      'UPDATE contact SET email = ?, phone = ?, address = ? WHERE id = 1',
      [email, phone, address]
    )
    
    res.json({ email, phone, address })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' })
  }
})

export default router