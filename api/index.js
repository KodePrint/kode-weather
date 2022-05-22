import express from 'express'
import cors from 'cors'
import { vars } from './configurations/vars.config.js'
import { routeApi } from './routes/index.js'
import { boomErrorHandler, errorHandler, logErrors, ormErrorHandler } from './middlewares/error.handler.js'

// Settings API Withe-List
const witheList = ['http://localhost:3000', 'http://localhost:5500']

// Initialize the app
const app = express()
const port = vars.port || 3001
app.use(express.json())

// Cors Middleware
const option = {
  origin: (origin, callback) => {
    if (witheList.indexOf(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(option))

// Routes
routeApi(app)

// Middlewares
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

// Start the server
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`Server Express runing on port ${port}`)
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
})

export { app, server, port }
