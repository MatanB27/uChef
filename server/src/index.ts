import express from 'express'
import usersRouter from './routes/users'
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { validateRequestBody } from './middleware/validation';

const PORT = 8000;
const app = express()
require('dotenv').config({ path: `.env.local` })

app
    .use(cors({credentials: true}))
    .use(cookieParser())
    .use(bodyParser.json())
    .use('/api/users', validateRequestBody, usersRouter)

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})

const MONGO_URL = process.env.MONGODB_URL
console.log('process.env.MONGODB_URL: ', process.env.MONGODB_URL);

// mongoose.Promise = Promise
// mongoose.connect(MONGO_URL)