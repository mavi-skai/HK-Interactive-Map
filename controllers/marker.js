const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const jwt = require('jsonwebtoken')
const updateMarker = async(req,res) =>{
    

    try {
        console.log(req.body.markerINFO)
        const {id: id,title,description,completion,category,isHidden} = req.body.markerINFO
        const decodedToken = jwt.decode(req.body.token);
        const userID = decodedToken.userID
        console.clear()
        console.log(userID) //6441ffc70d32099ee2469a3b
        console.log(id) //1
        console.log(title) //Grub
        console.log(isHidden) //true
        const updatedmarker = await User_Markers.findOneAndUpdate(
            {markerid:id,userid:userID,markername:title,},
            {
                isHidden:isHidden
            },
            {new:true})
            console.log(updatedmarker)
    } catch (error) {
        console.log(error)
    }
    
    
}

module.exports = {updateMarker}

