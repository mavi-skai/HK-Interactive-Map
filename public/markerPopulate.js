const connectDB = require('../db/connect')
const markerData = require('../markerData.json')
const Markers = require('../models/Markers')



// const start = async () =>{
//     try {
//         await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
//         await Markers.deleteMany()
//         await Markers.create(markerData)
//         console.log('Success!!!!')
//         process.exit(0)
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }


const findOne = async() =>{
    await connectDB('mongodb+srv://mavey24:XKpUgQqu89aubL3Q@hkmap.vixvfaf.mongodb.net/?retryWrites=true&w=majority')
    Markers.findOne({ id: 285 }, (err, marker) => {
      if (err) {
        console.error(err);
      } else {
        console.log(marker);
      }

      process.exit(0)
    });
  }

//start()
findOne()