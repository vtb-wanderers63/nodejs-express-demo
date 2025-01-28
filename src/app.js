import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { router as demoV1Router } from './routes/v1/demo.js'
import { router as healthRouter } from './routes/v1/health.js'

export const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/api/v1/demo', demoV1Router)
app.use(healthRouter)
