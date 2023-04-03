const express = require('express')

const router = express.Router()

const {handleAuth} = require('../controllers/auth.js')

const {getAllcomments} = require('../controllers/comments.js')

const {updateMarker} = require('../controllers/marker.js')


router.route('/').post(handleAuth).get(getAllcomments).put(updateMarker)


module.exports = router
