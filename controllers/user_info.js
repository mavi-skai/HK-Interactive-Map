const { StatusCodes } = require('http-status-codes')
const redisclient = require('./redis')



const getUserinfo = async(req,res,next) =>{
    try{
        const progress_keys = await redisclient.keys('progress:*')
        const markers_keys = await redisclient.keys('marker:*')
        const progress = []
        const markers = []
  
        for(const keys of progress_keys){
            const value = await redisclient.get(keys)
            const newkeys = keys.split(':')[1]
            const newobj = {'progress':value,'category':newkeys}
            progress.push(newobj)
        }

        for(const keys of markers_keys){
            const value = await redisclient.hgetall(keys)
            console.log(value)
            const newobj = {'markerid':parseInt(value.markerID),'isHidden':JSON.parse(value.isHidden)}
            markers.push(newobj)
        }

        res.status(StatusCodes.OK).json({msg:'Successfully Get the Userinfo',progress,markers})

    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getUserinfo}