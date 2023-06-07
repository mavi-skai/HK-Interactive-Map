const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const jwt = require('jsonwebtoken')
const updateMarker = async(req,res) =>{
    try {
        console.log(req.body.markerINFO)
        const {id: id,title,description,completion,category,isHidden} = req.body.markerINFO
        console.clear()
        console.log('before update')
        console.log(id,title)
        if(req.body.token){
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID
            const updatedmarker = await User_Markers.findOneAndUpdate(
                {markerid:id,userid:userID,markername:title,},
                {
                    isHidden:isHidden
                },
                {new:true})
            console.log('after update')
            console.log(updatedmarker)
        }
        else{
            console.log('no account login')
        }
    } catch (error) {
        console.log(error)
    }
    
    
}

module.exports = {updateMarker}

