const Comments = require('../models/Comments')


const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
    const { message } = req.body; 
    const { filename } = req.file;
    console.log('SAVECOMMENTS')
    console.log(file)
    console.log(message)
    
    
}

module.exports = {getAllcomments,saveComment}
