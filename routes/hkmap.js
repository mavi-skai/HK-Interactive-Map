const express = require('express')

const router = express.Router()

const {login,register} = require('../controllers/auth.js')

const {getAllcomments} = require('../controllers/comments.js')

const {updateMarker} = require('../controllers/marker.js')


router.route('/').post(login).post(register).get(getAllcomments).put(updateMarker)


module.exports = router
