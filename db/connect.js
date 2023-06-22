const mongoose = require('mongoose')


mongoose.set('strictQuery', true);


const connectDB = (url) => {


    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

    return mongoose.connect(url,options)
    .then(()=>console.log('CONNECTED TO THE DB.....'))
    .catch((error)=>console.log(error))
}

module.exports = connectDB