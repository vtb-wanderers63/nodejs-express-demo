import { Router } from 'express'
export const router = Router()

router.get('/', async (req, res) => {
  res.status(200).send({ message: 'App is running' })
})

router.get('/health', async (req, res) => {
  res.status(200).send({ message: 'App is running' })
})
