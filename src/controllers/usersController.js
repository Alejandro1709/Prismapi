import Prisma from '../lib/prisma.js'

const prisma = Prisma.getClient()

export const getUsers = async (_req, res) => {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}

export const getUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json(user)
}

export const createUser = async (req, res) => {
  const { name, email, username, password } = req.body

  const user = await prisma.user.create({
    data: { name, email, username, password },
  })

  res.status(201).json(user)
}

export const updateUser = async (req, res) => {
  const { name, email, username, password } = req.body

  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: { name, email, username, password },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json({ message: 'User updated!' })
}

export const deleteUser = async (req, res) => {
  const user = await prisma.user.delete({ where: { id: req.params.id } })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json({ message: 'User deleted!' })
}
