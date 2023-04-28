const Comments = require('../models/Comments')


const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
    const coments = req.body.msgimage

    console.log(coments.messageValue)
    console.log('test')
    
    
}

module.exports = {getAllcomments,saveComment}
