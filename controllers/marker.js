const { StatusCodes } = require('http-status-codes')
const User_Markers = require('../models/User_Markers')
const User_Progress = require('../models/User_Progress')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const redisclient = require('./redis')



const updateMarker = async(req,res) =>{
    
    try {
        if(req.body.updateDatabase===false){
            //console.log('Do not update database')
            const {id: markerid,name,isHidden,progress,markertype} = req.body.markerINFO
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID

            if(progress!=0){
                //console.log('progress is not equal to 0')
                redisclient.hmset('marker:'+markerid, 'userID', userID, 'isHidden', isHidden,'markerID',markerid);
                redisclient.get('progress:'+markertype,(err,value)=>{
                    if(err) throw err

                    var newprogress = isHidden === true ? progress + parseFloat(value) : formatToZeroPercentage(parseFloat(value) - progress)

                    //console.log(`new progress value: ${newprogress}`)
                    redisclient.get('progress:total',(err,totalvalue)=>{
                        if(err) throw err
                        //console.log(`old total value: ${totalvalue}`)
                        var newtotalprogress = isHidden === true? parseFloat(totalvalue) + progress : formatToZeroPercentage(parseFloat(totalvalue) - progress) 

                        //console.log(`new total value: ${newtotalprogress}`)

                        redisclient.set('progress:total',newtotalprogress)

                        redisclient.set('progress:'+markertype,newprogress) 
                            
                        res.status(StatusCodes.OK).json({ msg: "marker updated",newprogress,markertype,newtotalprogress});  
                    })  
                })
            }
            else{
                console.log('progress is equal to 0')
                await redisclient.hmset('marker:'+markerid, 'userID', userID, 'isHidden',isHidden,'markerID',markerid);
                res.status(StatusCodes.OK).json({ msg: "marker updated"});
            }

            
        }
        else if(req.body.updateDatabase===true){
            console.log('Update Database')
            const decodedToken = jwt.decode(req.body.token);
            const userID = decodedToken.userID
            const markers_keys = await redisclient.keys('marker:*')
            const progress_keys = await redisclient.keys('progress:*')
            const markers = []
            const progress = []

            async function fetchMarkers (){
                for(const key of markers_keys){
                    const value = await redisclient.hgetall(key)
                    markers.push(value)
                }

                for(const keys of progress_keys){
                    const value = await redisclient.get(keys)
                    const newkeys = keys.split(':')[1]
                    const newobj = {'progress':value,'category':newkeys}
                    progress.push(newobj)
                }
            }

           
            await fetchMarkers()

            const bulkUpdate = markers.map(marker =>({
                updateOne:{
                    filter:{markerid:marker.markerID, userid:marker.userID},
                    update:{isHidden:marker.isHidden}
                }
            }))

            const bulkUpdate2 = progress.map(prog => ({
                updateOne:{
                    filter:{userid:userID,category:prog.category},
                    update:{progress:prog.progress}
                }
            }))
            

            //User_Markers.bulkWrite(bulkUpdate)
            //User_Progress.bulkWrite(bulkUpdate2)

            redisclient.flushall()
            res.status(StatusCodes.OK).json({ msg: "Succesfully logout" });
        }
        

    } catch (error) {
        console.log(error)
    }
    
    
}


function formatToZeroPercentage(value) {
    return Math.abs(value) < 0.0001 ? '0%' : value ;
  }

module.exports = {updateMarker}

