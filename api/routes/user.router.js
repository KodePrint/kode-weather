import express from 'express'

// Create a router
const router = express.Router()


// POST
router.post('/', async (req, res) => {
  try {
    const {body} = req
    res.status(201).json(body)
  } catch (error) {
    throw error
  }
})

// GET
router.get('/', async (req, res) => {
  try {
    await res.status(200).json({
      message: 'Hello World!'
    })
  } catch (error) {
    throw error
  }
})

router.get('/:id', async (req, res) => {
  try {
    await res.status(200).json(body)
  } catch (error) {
    throw error
  }
})

export default router