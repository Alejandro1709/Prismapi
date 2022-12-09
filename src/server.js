import express from 'express'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

const app = express()

const prisma = new PrismaClient()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.get('/api/v1/users', async (_req, res) => {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
})

app.get('/api/v1/users/:id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json(user)
})

app.post('/api/v1/users', async (req, res) => {
  const { name, email, username, password } = req.body

  const user = await prisma.user.create({
    data: { name, email, username, password },
  })

  res.status(201).json(user)
})

app.put('/api/v1/users/:id', async (req, res) => {
  const { name, email, username, password } = req.body

  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: { name, email, username, password },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json({ message: 'User updated!' })
})

app.delete('/api/v1/users', async (req, res) => {
  const user = await prisma.user.delete({ where: { id: req.params.id } })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json({ message: 'User deleted!' })
})

app.listen(2023, () => console.log('Server is running on port 2023'))
