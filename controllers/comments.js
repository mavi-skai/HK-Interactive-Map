const Comments = require('../models/Comments')


const getAllcomments = async(req,res) => {

}

const saveComment = async(req,res) =>{
    console.clear()
    console.log('Inside of SaveComment req.body.message:'+req.body.message) 
    console.log(req.file) // not null
    console.log(req.file.buffer) // undefined
    console.log('Inside of SaveComment req.body.currentMarkerID: '+req.query.currentMarkerID)


    try {
        const newComments = {
            markerid:req.query.currentMarkerID,
            message:req.body.message,
            image:req.file.buffer,
        }
    
        const comment = await Comments.create(newComments)
        console.log('inserted')
    } catch (error) {
        console.log(error)
    }
    



}

module.exports = {getAllcomments,saveComment}
