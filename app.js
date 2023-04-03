const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connect')
require('express-async-errors');
const HKmap = require('./routes/hkmap.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')





app.use(express.static('./public'))
app.use(express.json());
app.use('/HKgitgud-map',HKmap)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000;


const start = async() => {
    try {
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
