import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.listen(2023, () => console.log('Server is running on port 2023'))
