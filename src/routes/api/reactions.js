const { Router } = require("express");

const {
  createReactionForThought,
  deleteReactionByThought,
} = require("../../controllers/api/reactions");

const router = Router();

router.post("/", createReactionForThought);
router.delete("/:reactionId", deleteReactionByThought);

module.exports = router;
