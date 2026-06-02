import { Router } from 'express'
import { getDatabase } from '../../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDatabase()
    const menu = await db.all('SELECT * FROM menu')
    res.json(menu)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description, price, category } = req.body
    const db = await getDatabase()
    
    const result = await db.run(
      'INSERT INTO menu (name, description, price, category) VALUES (?, ?, ?, ?)',
      [name, description, price, category]
    )
    
    res.json({ id: result.lastID, name, description, price, category })
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu item' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, price, category } = req.body
    const db = await getDatabase()
    
    await db.run(
      'UPDATE menu SET name = ?, description = ?, price = ?, category = ? WHERE id = ?',
      [name, description, price, category, id]
    )
    
    res.json({ id, name, description, price, category })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update menu item' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const db = await getDatabase()
    
    await db.run('DELETE FROM menu WHERE id = ?', [id])
    
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete menu item' })
  }
})

export default router