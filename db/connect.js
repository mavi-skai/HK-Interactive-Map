const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);
mongoose.connect(connectionString)
.then(()=>console.log('CONNECTED TO THE DB....'))
.catch((error)=>console.log(error))