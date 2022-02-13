const { Thought, schema } = require("../../models");

const createReactionForThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { ...req.body } },
      },
      { new: true }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new reaction" });
  }
};

const deleteReactionByThought = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { $elemMatch: { _id: reactionId } } },
      },
      { new: true }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = { createReactionForThought, deleteReactionByThought };
