const { Schema, model } = require("mongoose");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "reaction",
    },
  ],
};

const schema = new Schema(thoughtSchema);

const Thought = model("thought", schema);

module.exports = Thought;
