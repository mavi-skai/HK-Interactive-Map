const Comments = require('../models/Comments')


const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
   
    console.log(req.body.message)
    console.log(req.file)
    console.log(req.file.originalname)
    
    
}

module.exports = {getAllcomments,saveComment}
