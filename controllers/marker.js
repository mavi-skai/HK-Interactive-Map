const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const User_Progress = require('../models/User_Progress')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const redisclient = require('./redis')


//await redisclient.sendCommand(["FLUSHALL"]);



const updateMarker = async(req,res) =>{
    
    try {
        if(req.body.updateDatabase===false){
            console.log('Do not update database')
            const {id: markerid,name,isHidden,progress,markertype} = req.body.markerINFO
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID

            if(progress!=0){
                console.log('progress is not equal to 0')
                redisclient.get('progress:'+markertype,(err,value)=>{
                    if(err) throw err

                    var newprogress = progress + parseFloat(value)
       

                    redisclient.set('progress:'+markertype,newprogress)     
                    res.status(StatusCodes.OK).json({ msg: "marker updated",newprogress,markertype});      
                })
            }
            else{
                console.log('progress is equal to 0')
                redisclient.hmset('marker:'+markerid, 'userID', userID, 'isHidden', isHidden,'markerID',markerid,'progress',progress);
                res.status(StatusCodes.OK).json({ msg: "marker updated"});
            }

            
        }
        else if(req.body.updateDatabase===true){
            console.log('Update Database')

            const keys = await redisclient.keys('marker:*')
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


            // User_Markers.bulkWrite(bulkUpdate)
            //     .then(result => {
            //         console.log(`${result.modifiedCount} documents updated.`);
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     });


            res.status(StatusCodes.OK).json({ msg: "database updated" });
        }
        

    } catch (error) {
        console.log(error)
    }
    
    
}



module.exports = {updateMarker}

