const { Schema, model } = require("mongoose");

const userSchema = {
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "friend",
    },
  ],
};

const schema = new Schema(userSchema);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", schema);

module.exports = User;
