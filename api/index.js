const express = require('express')
const cors = require('cors')
const { vars } = require('./configurations/vars.config')

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

// Start the server
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server Express runing on port ${port}`)
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
})
