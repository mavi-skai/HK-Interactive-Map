const express = require('express')
const router = express.Router()
const {handleAuth} = require('../controllers/auth.js')
const {getAllcomments,saveComment} = require('../controllers/comments.js')
const {updateMarker} = require('../controllers/marker.js')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // uploads folder to store the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // rename the uploaded file with a timestamp to avoid overwriting
    }
  });

  const upload = multer({ storage: storage });

router.route('/')
.post(handleAuth)
.get(getAllcomments)
.put(updateMarker)
.post(upload.single('image'), saveComment);


module.exports = router
