const { User } = require("../../models");

const createFriendForUser = async (req, res) => {
  try {
    const { userName, email } = req.body;
    if (userName && email) {
      const newUser = await User.create({ userName, email });
      return res.json({ success: true, data: newUser });
    }
    return res.status(400).json({
      success: false,
      error: "Please complete the username and email",
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new user" });
  }
};

const deleteFriendByUser = (req, res) => {
  const { userId, friendId } = req.params;
  console.log("userId", userId);
  console.log("friendId", friendId);
  res.send("deleteFriendByUser");
};

module.exports = { createFriendForUser, deleteFriendByUser };
