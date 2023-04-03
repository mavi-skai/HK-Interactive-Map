const mongoose = require('mongoose');
const geojson = require('mongoose-geojson-schema');
const Schema = mongoose.Schema;

const CoordinatesSchema = new Schema({
  coordinatestype: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
  //geojson
  coordinates2: geojson.Point
});

const MarkerSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  markerType:{
    type:String,
    enum:['Grub','Charms','NPC','Bosses',
  'Upgrades','Shortcuts','Map Misc.',
  'Bench & Transport','Items','Geo Totems'],
    required:true,
  },
  isHidden:{
    type:Boolean,
    required:true,
    default:false
  },
  location: CoordinatesSchema
});

const Marker = mongoose.model('Marker', MarkerSchema);

module.exports = Marker;
