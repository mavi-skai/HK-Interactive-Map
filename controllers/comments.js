const Comments = require('../models/Comments')


const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
    console.clear()
    console.log('Inside of SaveComment req.body.message:'+req.body.message) 
    console.log(req.file)
    console.log('Inside of SaveComment req.body.currentMarkerID: '+req.query.currentMarkerID)

}

module.exports = {getAllcomments,saveComment}
