import express from 'express'
import usersRouter from './routes/users'

const PORT = 8000;

const app = express()

app.use('/api/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})