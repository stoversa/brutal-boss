
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        require: true
    },
    commentBy: {
        type: String,
        require: true
    },
    commentAbout: {
        type: String,
        require: true
    },
    timestamps: {
        createdAt: 'created_at',
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