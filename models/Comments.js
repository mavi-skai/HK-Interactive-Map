const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  markerid:{
    type:Number,
    required:[true,'Please provide User ID']
  },
  message: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required:[true,'Please provide Image Path']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const HKMap = mongoose.connection.useDb('HKMap')
const Comments = HKMap.model('comments',CommentSchema)

module.exports = Comments
