const { Thought } = require("../../models");

const getThoughts = (req, res) => {
  // try {
  //   const thoughts = await Thought.find({}).populate("users");
  //   return res.json({ success: true, data: thoughts });
  // } catch (error) {
  //   console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
  //   return res
  //     .status(500)
  //     .json({ success: false, error: "Failed to get thoughts" });
  // }
};
const getThoughtById = (req, res) => {
  const { thoughtId } = req.params;
  console.log("thoughtId", thoughtId);
  res.send("getThoughtById");
};
const createThought = (req, res) => {
  res.send("createThought");
};
const updateThoughtById = (req, res) => {
  const { thoughtId } = req.params;
  console.log("thoughtId", thoughtId);
  res.send("updateThoughtById");
};
const deleteThoughtById = (req, res) => {
  const { thoughtId } = req.params;
  console.log("thoughtId", thoughtId);
  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
