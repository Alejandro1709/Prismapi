import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/users', userRoutes)

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.listen(2023, () => console.log('Server is running on port 2023'))
