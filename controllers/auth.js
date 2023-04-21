const BadRequestError = require('../errors/bad-request')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')


const handleAuth = async (req,res,next) => {

    if(req.body.action=='register'){
        try {
            const {name,email,password,password2} = req.body.registerinfo
            const userData = {
                name,
                email,
                password,
            }

            if(!password || !password2){
                throw new BadRequestError('Please provide password')
            }

            if(password!==password2){
                throw new BadRequestError('Password do not match')
            }
            
            const usercheck = await User.findOne({ email: userData.email }).exec()
            if(usercheck){
                throw new BadRequestError('Email Already Exist');
            }

            const createdUser = await User.create(userData)
            createdUser.createUserMakers(createdUser)
            res.status(StatusCodes.OK).json({ msg: "Your account has been created!" });
            
        } catch (error) {
            next(error)
        }
        

    }
    else if(req.body.action=='login'){
        try {
            const {email,pass} = req.body.logininfo
            //console.log(req.body.logininfo)

            if(!email || !pass){
                throw new BadRequestError('Please provide email and password')
            }

            const user = await User.findOne({email})

            if(!user){
                throw new BadRequestError('Invalid email or password')
            }

            const isPasswordCorrect = await user.comparePassword(pass)
            if(!isPasswordCorrect){
                throw new BadRequestError('Invalid email or password')
            }

            const token = user.createJWT()
            res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
            
        } catch (error) {
            next(error)
        }
        


    }
}

module.exports = {handleAuth}
