import { Request, Response, NextFunction } from 'express'

interface AuthRequest extends Request {
  userId?: string
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'No authorization token' })
  }

  try {
    // TODO: Verify JWT token
    req.userId = 'user-id'
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export default authMiddleware