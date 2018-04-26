const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  meetingId: {
    type: String,
    require: true
  },
  createdBy: {
    type: String,
    require: true
  },
  speaker: {
    type: String,
    require: true
  },
  eventDate: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comments',
    require: false }]
});


module.exports = mongoose.model("Meeting", meetingSchema);