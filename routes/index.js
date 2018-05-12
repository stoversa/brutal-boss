const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authAPI");
const meetingRoutes = require("./api/meetingAPI");
const commentRoutes = require("./api/commentsAPI");


// API Routes

router.use("/api/meetings", meetingRoutes);
router.use("/api/comments", commentRoutes);
router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
