const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User_ProgressSchema = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:[true,'Please provide User ID']
    },
    category:{
        type:String,
        required:[true,'Please provide Marker Category']
    },
    progress:{
        type:String,
        required:[true,'Please provide Completion Percentage'],
    }
})


const HKMap = mongoose.connection.useDb('HKMap')
const User_Progress = HKMap.model('user_progresses',User_ProgressSchema)

module.exports = User_Progress