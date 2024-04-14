import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router';

const PORT = 8000;
const app = express()
require('dotenv').config({ path: `.env.local` })

app
    .use(cors({credentials: true}))
    .use(cookieParser())
    .use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})

const MONGO_URL = process.env.MONGODB_URL

mongoose.Promise = Promise
mongoose.connect(MONGO_URL !== undefined ? MONGO_URL : '')
mongoose.connection.on('error', (error: Error) => console.log('mongoose error: ', error))

app.use('/', router())