const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  id: {
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
    type: Date,
    require: true
  },
  location: {
    type: String,
    require: true
  },
});

module.exports = mongoose.model("Meeting", meetingSchema);