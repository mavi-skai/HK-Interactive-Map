const Comments = require('../models/Comments')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')

const getAllcomments = async(req,res) => {
    console.log('getallcomments in:' + req.query.currentMarkerID)
    
    try {
      var comments = await Comments.find({markerid:req.query.currentMarkerID}).limit(1).exec()
      //console.log('inside of comments.js controller:'+Array.isArray(comments))

     

      //res.status(StatusCodes.OK).json({comments });
    } catch (error) {
      console.log(error)
    }
}

const saveComment = async(req,res) =>{
    console.clear()
    console.log(req.file)
    //change image buffer to image path
    try {
        
        // const imagebuffer = await new Promise((resolve, reject) => {
        //     fs.readFile(req.file.path, (err, data) => {
        //       if (err) {
        //         console.log(err);
        //         reject(err);
        //       } else {
        //         resolve(data);
        //       }
        //     });
        //   });

        // const newComments = {
        //     markerid:req.query.currentMarkerID,
        //     message:req.body.message,
        //     image:imagebuffer,
        // }


        // console.log(newComments)
    
        // const comment = await Comments.create(newComments)
        // console.log('inserted')
    } catch (error) {
        console.log(error)
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