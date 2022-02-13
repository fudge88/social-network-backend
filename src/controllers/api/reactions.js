const { Thought, schema } = require("../../models");

const createReactionForThought = async (req, res) => {
  // try {
  //   const { reactionBody, userName } = req.params;
  //   const newReaction = await Thought.reactions.create({
  //     reactionBody,
  //     userName,
  //   });
  //   return res.json({ success: true, data: newReaction });
  // } catch (error) {
  //   console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
  //   return res
  //     .status(500)
  //     .json({ success: false, error: "Failed to create reaction" });
  // }
  try {
    const { reactionBody, userName } = req.body;
    if (reactionBody && userName) {
      const newReaction = await schema.create({ userName, thoughtText });
      Thought.reactions.push(newReaction);
      return res.json({ success: true, data: newThought });
    }
    return res.status(400).json({
      success: false,
      error: "Please complete the required fields",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new thought" });
  }
  // create a comment
  // const { reactionBody, userName } = req.params;
  // Thought.reactions.push(reactionBody, userName);
  // const newReaction = Thought.reactions[0];

  // Thought.save(function (err) {
  //   if (err) return handleError(err);
  //   console.log("Success!");
  // });
};

const deleteReactionByThought = (req, res) => {
  const { thoughtId, reactionId } = req.params;
  console.log("thoughtId", thoughtId);
  console.log("reactionId", reactionId);
  res.send("deleteReactionByThought");
};

module.exports = { createReactionForThought, deleteReactionByThought };
