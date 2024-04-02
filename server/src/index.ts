import express from 'express'
import usersRouter from './routes/users'
import bodyParser from 'body-parser';
import cors from 'cors'
import { validateRequestBody } from './middleware/validation';
const PORT = 8000;

const app = express()


app
    .use(cors())
    .use(bodyParser.json())
    .use('/api/users', validateRequestBody, usersRouter)

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})