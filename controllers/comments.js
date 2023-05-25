const Comments = require('../models/Comments')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')

const getAllcomments = async(req,res) => {
    try {
      var comments = await Comments.find({markerid:req.query.currentMarkerID}).exec()
    
      res.status(StatusCodes.OK).json({comments });
    } catch (error) {
      console.log(error)
    }
}

const saveComment = async(req,res) =>{
    console.clear()
    try {
        const newComments = {
            markerid:req.query.currentMarkerID,
            message:req.body.message,
            image:req.file.path,
        }

        const comment = await Comments.create(newComments)
        res.status(StatusCodes.OK).json({msg:'comment inserted'})
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