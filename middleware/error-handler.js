const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-api')
const errorHandlerMiddleware = (err,req,res,next) => {

    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
      }

      if (err instanceof CustomAPIError) {
        return res.status(customError.statusCode).json({ msg: customError.msg })
      } 
      
    //return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware