const Comments = require('../models/Comments')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')

const getAllcomments = async(req,res) => {
    console.log('getallcomments in:' + req.query.currentMarkerID)
    
    try {
      var comments = await Comments.find({markerid:req.query.currentMarkerID}).exec()
      //console.log('inside of comments.js controller:'+Array.isArray(comments))

      if(comments.length!==0){
        console.log(comments)
      }
      else{
        console.log('empty')
      }
      
      res.status(StatusCodes.OK).json({comments });
    } catch (error) {
      console.log(error)
    }
}

const saveComment = async(req,res) =>{
    console.clear()
    console.log(req.file.path)
    try {
        const newComments = {
            markerid:req.query.currentMarkerID,
            message:req.body.message,
            image:req.file.path,
        }

        const comment = await Comments.create(newComments)
        console.log('inserted')
    } catch (error) {
        console.log(error)
        fs.unlink(req.file.path,(error)=>{
          if(error){
            console.log(error)
            return
          }
          
          console.log('Image deleted successfully.');
        })
    }
    



}

module.exports = {getAllcomments,saveComment}

function isBase64(str) {
  try {
    return Buffer.from(str, 'base64').toString('base64') === str;
  } catch (error) {
    return false;
  }
}