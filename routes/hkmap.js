const express = require('express')

const router = express.Router()

const {handleAuth} = require('../controllers/auth.js')

const {getAllcomments,saveComment} = require('../controllers/comments.js')

const {updateMarker} = require('../controllers/marker.js')


router.route('/')
.post(handleAuth)
.get(getAllcomments)
.put(updateMarker)
.post(saveComment)


module.exports = router
