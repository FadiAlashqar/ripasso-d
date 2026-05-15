const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController.js')


router.get('/users', usersController.usersIndex)

router.get('/users/:id', usersController.usersDetail)

router.post('/users', usersController.createNewUser)

router.delete('/users/:id', usersController.deleteUser)

router.put('/users/:id', usersController.putUser)



module.exports = router