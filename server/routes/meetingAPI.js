const router = require("express").Router();
const meetingsController = require("../controllers/meetingsController")

// Matches with "/api/meetings" (check server.js line 19)
router.route("/")
  .get(meetingsController.findAll) // get all meetings
  .post(meetingsController.create) // create a meeting

router.route("/:id")
  .get(meetingsController.findById) // get a meeting by id
  .put(meetingsController.update) // update a meeting by id
  .delete(meetingsController.delete) // delete a meeting by id

module.exports = router;