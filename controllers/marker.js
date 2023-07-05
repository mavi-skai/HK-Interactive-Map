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


            redisclient.hmset(markerid, 'userID', userID, 'isHidden', isHidden,'markerID',markerid);
            res.status(StatusCodes.OK).json({ msg: "marker updated" });
        }
        else if(req.body.updateDatabase===true){
            console.log('Update Database')
            const keys = await redisclient.keys('*')
            const markers = []

            async function fetchMarkers (){
                for(const key of keys){
                    const value = await redisclient.hgetall(key)
                    markers.push(value)
                }
            }
           
            await fetchMarkers()
            console.log(markers);

            const bulkUpdate = markers.map(marker =>({
                updateOne:{
                    filter:{markerid:marker.markerID,userid:marker.userID},
                    update:{isHidden:marker.isHidden}
                }
            }))


            User_Markers.bulkWrite(bulkUpdate)
                .then(result => {
                    console.log(`${result.modifiedCount} documents updated.`);
                })
                .catch(error => {
                    console.error(error);
                });


            res.status(StatusCodes.OK).json({ msg: "database updated" });
        }
        

    } catch (error) {
        console.log(error)
    }
    
    
}



module.exports = {updateMarker}

