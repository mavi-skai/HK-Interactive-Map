const express = require('express')
const router = express.Router()
const {handleAuth} = require('../controllers/auth.js')
const {getAllcomments,saveComment} = require('../controllers/comments.js')
const {updateMarker} = require('../controllers/marker.js')
const multer = require('multer');

const upload = multer({ dest: 'public/uploads' });

router.route('/')
.get(getAllcomments)
.put(updateMarker)
.post((req,res)=>{
  if(req.body.action==='signuplogin'){

  }
  else if(req.body.action==='comments'){
    console.log('COMMENTS POST')
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ error: 'Invalid file upload' });
      }
      saveComment(req, res);
    });
    

  }
})




module.exports = router
