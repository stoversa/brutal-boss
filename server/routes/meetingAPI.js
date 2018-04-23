const router = require("express").Router();
const meetingsController = require("../controllers/meetingsController")

// Matches with "/api/books" (check server.js line 19)
router.route("/")
  .get(meetingsController.findAll) // get all bokks
  .post(meetingsController.create) // create a book

router.route("/:id")
  .get(meetingsController.findById) // get a book by id
  .put(meetingsController.update) // update a book by id
  .delete(meetingsController.delete) // delete a book by id

module.exports = router;