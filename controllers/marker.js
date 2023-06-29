const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const redis = require("redis");
const redisclient = redis.createClient();
redisclient.connect();

//await redisclient.sendCommand(["FLUSHALL"]);



const updateMarker = async(req,res) =>{
    try {
        const {id: markerid,name,isHidden} = req.body.markerINFO
        const decodedToken = jwt.decode(req.body.token);
        const userID = decodedToken.userID

        redisclient.hSet(String(markerid), 'userid', String(userID))
        redisclient.hSet(String(markerid), 'isHidden', String(isHidden))
       


        // if(req.body.token){
        //     const decodedToken = jwt.decode(req.body.token);
        //     const userID = decodedToken.userID
        //     const updatedmarker = await User_Markers.findOneAndUpdate(
        //         {markerid:id,userid:userID,markername:name},
        //         {
        //             isHidden:isHidden   
        //         },
        //         {new:true})
        //     console.log('after update')
        //     console.log(updatedmarker)
        // }
        // else{
        //     console.log('no account login')
        // }

    } catch (error) {
        console.log(error)
    }
    
    
}
//
module.exports = {updateMarker}

