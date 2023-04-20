const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarkerSchema = new Schema({
  id: {
    type: Number,
    required: [true, 'Please provide marker id'],
  },
  name:{
    type:String,
    required:[true,'Please provide name'],
  },
  x:{
    type:Number,
    required:[true,'Please provide x coordinate'],
  },
  y:{
    type:Number,
    required:[true,'Please provide y coordinate'],
  },
  path:{
    type:String,
    required:[true,'Please provide image path'],
  },
  description:{
    type: [{
      type: String
    }],
  },
  progress:{
    type:Number,
    required:[true,'Please provide progress'],

  },
  markertype:{
    type:String,
    required:[true,'Please provide image markertype'],
  },
});

const HKMap = mongoose.connection.useDb('HKMap')
const Marker = HKMap.model('markers',MarkerSchema)

module.exports = Marker;

//['Grub',-575, 1314,'icon/grub.png','',0,'grub'],
//name,x,y,path,description,progress,markertype