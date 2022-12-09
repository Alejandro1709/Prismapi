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

app.post('/api/v1/users', async (req, res) => {
  const { name, email, username, password } = req.body

  const user = await prisma.user.create({
    data: { name, email, username, password },
  })

  res.status(201).json(user)
})

app.listen(2023, () => console.log('Server is running on port 2023'))
