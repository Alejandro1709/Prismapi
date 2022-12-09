import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes.js'
import { nodeEnv, port } from './config/index.js'

const app = express()

app.use(express.json())

if (nodeEnv === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/users', userRoutes)

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
