const BadRequestError = require('../errors/bad-request')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = require('../middleware/error-handler')
const User_Progress = require('../models/User_Progress')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const redisclient = require('./redis')


const prog = ['maskshard',
              'vesselfragment',
              'spellsandabilities',
              'explorationandquest',
              'paleore',
              'charms',
              'boss',
              'warriorsdreams',
              'dreamers',
              'fools',
              'achievement',
              'godhome',
              'keys',
              'total',]

const handleAuth = async (req,res,next) => {
    if(req.body.action=='signup'){
        try {
            const {username,email,password,password2} = req.body.signupinfo
            const userData = {
                username,
                email,
                password,
            }

            if(!password || !password2){
                throw new BadRequestError('Please provide password')
            }

            if(password!==password2){
                throw new BadRequestError('Password do not match')
            }
            
            const emailcheck = await User.findOne({ email: userData.email }).exec()
            if(emailcheck){
                throw new BadRequestError('Email Already Exist');
            }

            const usernamecheck = await User.findOne({ username: userData.username }).exec()
            if(usernamecheck){
                throw new BadRequestError('Username Already Exist');
            }


      
            const createdUser = await User.create(userData)
            createdUser.createUserMakers(createdUser)
            createdUser.createUserProgression(createdUser)

           
            
            res.status(StatusCodes.OK).json({ msg: "Your account has been created!" });
            
        } catch (error) {
            console.log(error)
            next(error)
            
        }
        

    }
    else if(req.body.action=='login'){
        try {
            const {username,pass} = req.body.logininfo

            if(!username || !pass){
                throw new BadRequestError('Please provide username and password')
            }

            const user = await User.findOne({username})

            if(!user){
                throw new BadRequestError('Invalid username or password')
            }

            const isPasswordCorrect = await user.comparePassword(pass)
            if(!isPasswordCorrect){
                throw new BadRequestError('Invalid username or password')
            }

            const token = user.createJWT()
            const decodedToken = jwt.decode(token);
            const userID = decodedToken.userID


            const progress = await User_Progress.find({userid:userID}).select('-_id progress category')

            for(var i=0;i<progress.length;i++){
                redisclient.set('progress:'+progress[i].category,progress[i].progress)
            }

            res.status(StatusCodes.OK).json({ user: { name: user.username }, token ,progress})
            
        } catch (error) {
            //console.log(error)
            next(error)//error 
        }
    }
}

module.exports = {handleAuth}
