const mongoose = require('mongoose')
const User_Markers = require('../models/User_Markers')
const Commnets = require('../models/Comments')
const User = require('../models/User')
const connectDB = require('../db/connect')
const { response } = require('express')
const Comments = require('../models/Comments')
const fs = require('fs')



const deleteDataUser = async() =>{
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


const deleteAllUser = async() =>{
    await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
    try {
        await User.deleteMany({})
        console.log('all user deleted')
    } catch (error) {
        console.log(error)
    }
}

const deleteAllUserMarkers = async() => {
    await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
    try {
        await User_Markers.deleteMany({})
        console.log('all user markers deleted')
    } catch (error) {
        console.log(error)
    }
}

const deleteComments = async() =>{
    await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
    try {
        await Comments.deleteMany({});
        console.log('all comments deleted')
    } catch (error) {
        console.log(error)
    }

    try {
        var folderpath = '../uploads/'
        fs.readdir(folderpath,(err,files)=>{
            if(err) throw err

            files.forEach(file => {
                fs.unlink(folderpath+file,err=>{
                    if(err){
                        console.log(err);
                    }
                })
            })

        })
  
    } catch (error) {
        console.log(error)
    }
}

//deleteDataUser()
//deleteComments()
//deleteAllUser()
//deleteAllUserMarkers()

