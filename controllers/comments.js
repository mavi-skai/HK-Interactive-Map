const Comments = require('../models/Comments')
const fs = require('fs')

const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
    console.clear()

    try {
        
        const imagebuffer = await new Promise((resolve, reject) => {
            fs.readFile(req.file.path, (err, data) => {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                resolve(data);
              }
            });
          });

        const newComments = {
            markerid:req.query.currentMarkerID,
            message:req.body.message,
            image:imagebuffer,
        }


        console.log(newComments)
    
        const comment = await Comments.create(newComments)
        console.log('inserted')
    } catch (error) {
        console.log(error)
    }
    



}

module.exports = {getAllcomments,saveComment}
