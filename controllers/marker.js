const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const updateMarker = async(req,res) =>{
    try {
        const {id: id,name,description,progression,markertype,isHidden} = req.body.markerINFO
        //console.clear()
        //console.log('before update')
        //console.log(id,name,description,progression,markertype,isHidden)
        if(req.body.token){
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID
            const updatedmarker = await User_Markers.findOneAndUpdate(
                {markerid:id,userid:userID,markername:name},
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
//
module.exports = {updateMarker}

