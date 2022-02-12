const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thoughts = await Thought.findById(thoughtId);
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const createThought = async (req, res) => {
  try {
    const { userName, thoughtText } = req.body;
    if (userName && thoughtText) {
      const newThought = await Thought.create({ userName, thoughtText });
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
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { userName, thoughtText } = req.body;
    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      userName,
      thoughtText,
    });
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const deletedThought = await Thought.findByIdAndDelete(thoughtId);
    return res.json({ success: true, data: deletedThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Please provide correct ID" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
