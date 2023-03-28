const express = require('express')
const app = express()
const HKmap = require('./routes/hkmap.js')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json());

app.use('/HKgitgud-map',HKmap)

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
