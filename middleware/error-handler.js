const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-api')



const errorHandlerMiddleware = (error,req,res,next) => {
    console.log('test inside error-handler.js')
    let customError = {
        // set default
        statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: error.message || 'Something went wrong try again later',
      }

      // if (err instanceof CustomAPIError) {
      //   return res.status(customError.statusCode).json({ msg: customError.msg })
      // } 

    console.log(error.name)
   
    if(error.name === 'ValidationError'){
      console.log('validation error')
      customError.msg = Object.values(error.errors)
      .map((item) => item.message)
      customError.statusCode = 400
    }
    
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware