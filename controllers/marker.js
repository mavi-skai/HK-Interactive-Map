

const updateMarker = async(req,res) =>{
    console.log(req.body.markerINFO)
    const {id,title,description,completion,category} = req.body.markerINFO
    console.log(id)
    
}

module.exports = {updateMarker}

