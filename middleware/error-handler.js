const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-api')
const errorHandlerMiddleware = (err,req,res,next) => {

    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
      }

      // if (err instanceof CustomAPIError) {
      //   return res.status(customError.statusCode).json({ msg: customError.msg })
      // } 

    //console.log(err.name)
   
    if(err.name === 'ValidationError'){
      console.log('validation error')
      customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      customError.statusCode = 400
    }
      
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware