import express from 'express'
const app = express()

app.use(express.json())

import {readFile} from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'
import Job from './models/Job.js'

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.deleteMany()
        const jsonProducts = JSON.parse(await readFile(new URL('./MOCK_DATA.json', import.meta.url)))
        await Job.create(jsonProducts)
        console.log('successful!!!')
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

start()