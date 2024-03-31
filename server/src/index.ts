import express from 'express'
import usersRouter from './routes/users'
import bodyParser from 'body-parser';
import cors from 'cors'
const PORT = 8000;

const app = express()


app
    .use(cors())
    .use(bodyParser.json())
    .use('/api/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})