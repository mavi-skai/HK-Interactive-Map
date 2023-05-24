const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
require('express-async-errors');
const HKmap = require('./routes/hkmap.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')





app.use(express.static('./public'))
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use('/HKgitgud-map',HKmap)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000;


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
