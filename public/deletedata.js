const mongoose = require('mongoose')
const User_Markers = require('../models/User_Markers')
const User = require('../models/User')
const connectDB = require('../db/connect')
const { response } = require('express')


const deleteData = async() =>{
    await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
    userID = ''
    const userIDObj = mongoose.Types.ObjectId(userID)
    try {
        const result1 = await User.deleteOne({_id:userIDObj})
        const result2 = await User_Markers.deleteMany({userid:userIDObj})
        console.log(`Deleted User ${result1.deletedCount}`);
        console.log(`Deleted User Marker ${result2.deletedCount}`);

    } catch (error) {
        console.log(err);
    }
  
}

deleteData()
