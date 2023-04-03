const BadRequestError = require('../errors/bad-request')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')

const handleAuth = async (req,res) => {

    if(req.body.action=='register'){
        console.log(req.body.registerinfo)
        console.log(req.body.action)
        const {name,email,password} = req.body.registerinfo
        console.log(name,email,password)
        const userData = {
            name,
            email,
            password,
        }

        User.create(userData)
            .then((user)=>{
                console.log('New user created:', user);
            })
            .catch((error)=>{
                console.log('Error creating user:', error);
            })
    }
    else if(req.body.action=='login'){
        const {email,pass} = req.body.logininfo
        console.log(req.body.logininfo)
        console.log(req.body.action)

        if(!email || !pass){
            throw new BadRequestError('Please provide email and password')
            
        }

        
        res.status(StatusCodes.OK).json({ msg: "success" });


    }
}

module.exports = {handleAuth}
