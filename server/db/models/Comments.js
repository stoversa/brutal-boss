const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String,
        require: true
    },
        ratingNumber: {
        type: Number,
        require: true
    },
    commentedBy: {
        type: String,
        require: true
    },
    timestamps: {
        createdAt: 'created_at',
        require: true
    },
    meetingId: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    tagArray: {
        type: Array,
        require: false
    }
});


module.exports = mongoose.model("Comments", commentSchema);