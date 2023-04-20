const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User_MarkersSchema = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:[true,'Please provide User ID']
    },
    markerid:{
        type:Number,
        required:[true,'Please provide Marker ID']
    },
    markername:{
        type:String,
        required:[true,'Please provide marker name']

    },
    isHidden:{
        type:Boolean,
        default:false,
    }
})


const HKMap = mongoose.connection.useDb('HKMap')
const User_Markers = HKMap.model('user_markers',User_MarkersSchema)



module.exports = User_Markers