const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

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
  reactions: [Reaction],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schema);

module.exports = Thought;
