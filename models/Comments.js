const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  markerid:{
    type:Schema.Types.ObjectId,
    required:[true,'Please provide User ID']
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: Buffer,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const HKMap = mongoose.connection.useDb('HKMap')
const Comments = HKMap.model('comments',CommentSchema)

module.exports = Comments
