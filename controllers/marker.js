const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const Redis = require("ioredis");
const redisclient = new Redis();


//await redisclient.sendCommand(["FLUSHALL"]);



const updateMarker = async(req,res) =>{
    
    try {
        if(req.body.updateDatabase===false){
            console.log('Do not update database')
            const {id: markerid,name,isHidden} = req.body.markerINFO
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID


            redisclient.hmset(markerid, 'userID', userID, 'isHidden', isHidden);
        }
        else if(req.body.updateDatabase===true){
            console.log('Update Database')
            
        //    await redisclient.keys('*',function(err,keys){
        //         if(err) return console.log(err)
        //         if(keys){
        //             console.log(keys)
        //             keys.forEach(function(key){
        //                 redisclient.hgetall(key,function(err,value){
        //                     if(err) return console.log(err)
        //                     markers[key] = value
        //                 })
        //             })
        //         }
        //     })

        const keys = await redisclient.keys('*')
        const markers = {}
        for(const key of keys){
            const value = await redisclient.hgetall(key)
            markers[key] = value
        }

        console.log(markers);
        }
        
       


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

