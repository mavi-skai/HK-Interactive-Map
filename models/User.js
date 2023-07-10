const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User_Markers = require('./User_Markers')
const usermarkerData = require('../usermarkersData.json')
const userprogressData = require('../userprogressData.json')
const User_Progress = require("../models/User_Progress")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type:String,
        required: [true, 'Please provide name'],
        minlength: [4, 'Name must be at least 4 characters long'],
        maxlength: [18, 'Name cannot be more than 18 characters long'], 
    },
    email: {
        type:String,
        required:[true,'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true,
    },
    password: {
        type:String,
        required:[true,'Please provide password'],
        minlength:[6, 'Password must be at least 8 characters long'],
        maxlength:[18, 'Password cannot be more than 50 characters long'],
    },
})

UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})


UserSchema.methods.createJWT = function() {
    return jwt.sign(
        {userID:this._id,name:this.name},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(password,this.password)
    return isMatch
}

UserSchema.methods.createUserMakers = async function(){
    const markers = usermarkerData.map(usermarker=>{
        return {
            userid:this._id,
            markerid:usermarker.markerid,
            markername:usermarker.markername,
        }
    })
    await User_Markers.insertMany(markers) // ID ERROR 
}

UserSchema.methods.createUserProgression = async function(){
    const progress = userprogressData.map(progress=>{
        return {
            userid:this._id,
            category:progress.category,
            progress:progress.progress,
        }
    })
    
    await User_Progress.insertMany(progress)
}


const HKMap = mongoose.connection.useDb('HKMap')
const User = HKMap.model('users',UserSchema)
module.exports = User

