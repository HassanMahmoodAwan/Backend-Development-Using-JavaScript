const express = require('express')
const router = express.Router()
const {registerUser, loginUser, currentUser} = require('../Controllers/usersController')
const verifyToken = require('../Middlewares/verifyTokenHandler')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
// router.route('/current').get(currentUser)
router.get('/current',verifyToken, currentUser)


module.exports = router