const { User } = require("../../models");

const createFriendForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findByIdAndUpdate(
      userId,
      {
        $push: { friends: req.body._id },
      },
      { new: true }
    ).populate("friends");
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new friend" });
  }
};

const deleteFriendByUser = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const data = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { friends: { $in: [friendId] } },
      },
      { new: true }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete friend" });
  }
};

module.exports = { createFriendForUser, deleteFriendByUser };
