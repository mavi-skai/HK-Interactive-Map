const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-api')



const errorHandlerMiddleware = (error,req,res,next) => {
    let customError = {
        // set default
        statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: error.message || 'Something went wrong try again later',
      }

      // if (err instanceof CustomAPIError) {
      //   return res.status(customError.statusCode).json({ msg: customError.msg })
      // } 

   
    if(error.name === 'ValidationError'){
      console.log('validation error')
      customError.msg = Object.values(error.errors)
      .map((item) => item.message)
      customError.statusCode = 400
    }

    if(error.name==='MongoServerError')
    {
      customError.msg = 'something wrong in the server'
      customError.statusCode = 400
    }

    if(error.name==='ReferenceError'){
      customError.msg = 'something wrong in the server'
      customError.statusCode = 400
    }
    
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware