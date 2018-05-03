const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true
  },
  speaker: {
    type: String,
    require: true
  },
  eventDate: {
    type: Date,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comments',
    require: false }],
  ended: {
    type: Boolean,
    require: true,
    default: false
  }
});


module.exports = mongoose.model("Meeting", meetingSchema);