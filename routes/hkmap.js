const express = require('express')
const router = express.Router()
const {handleAuth} = require('../controllers/auth.js')
const {getAllcomments,saveComment} = require('../controllers/comments.js')
const {updateMarker} = require('../controllers/marker.js')
const path = require('path')
const multer = require('multer');


var storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage});

router.route('/')
.get(getAllcomments)
.put(updateMarker)
.post((req,res)=>{
  if(req.body.action==='signuplogin'){

  }
  else if(req.query.action==='comments'){
    console.clear()
    upload.single('Image')(req, res, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ error: 'Invalid file upload' });
      }
      saveComment(req,res)
    });
  

  }
})

 // 


module.exports = router
