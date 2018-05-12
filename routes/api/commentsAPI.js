const router = require("express").Router();
const commentsController = require("../../controllers/commentsController")

// Matches with "/api/meetings" (check server.js line 19)
router.route("/")
  .get(commentsController.findAll) // get all meetings
  .post(commentsController.create) // create a meeting

router.route("/:id")
  .get(commentsController.findById) // get a meeting by id
  .put(commentsController.update) // update a meeting by id
  .delete(commentsController.delete) // delete a meeting by id

module.exports = router;