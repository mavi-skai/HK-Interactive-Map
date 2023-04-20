const mongoose = require('mongoose')


mongoose.set('strictQuery', true);

const connectDB = (url) => {
    return mongoose.connect(url)
    .then(()=>console.log('CONNECTED TO THE DB.....'))
    .catch((error)=>console.log(error))
}

module.exports = connectDB