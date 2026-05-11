const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController.js')

router.get('/users', usersController.usersIndex)


module.exports = router