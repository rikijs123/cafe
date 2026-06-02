import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  // TODO: Implement settings
  res.json({ settings: {} })
})

router.put('/', (req, res) => {
  // TODO: Implement settings update
  res.json({ success: true })
})

export default router