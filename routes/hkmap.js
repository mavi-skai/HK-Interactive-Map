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
    const extension = file.originalname.split('.').pop()
    const filename = `${file.fieldname}_${Date.now()}.${extension}`;
    cb(null, filename);
  }
})

var upload = multer({ storage: storage});

router.route('/')
.get(getAllcomments)
.put(updateMarker)
.post((req,res,next)=>{

  if(req.body.action==='login' || req.body.action==='signup'){
    handleAuth(req,res,next)
  }
  else if(req.query.action==='comments'){
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
