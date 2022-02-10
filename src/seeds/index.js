const mongoose = require("mongoose");

const { User, Thought } = require("../models");

const users = require("./data/users");
const thoughts = require("./data/thoughts");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    User.deleteMany({});
    User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    Thought.deleteMany({});
    Thought.insertMany(thoughts);

    console.log("[INFO]: successfully seeded thoughts");

    // await mongoose.disconnect();
  } catch (error) {
    console.log(`[INFO]: Database connection failed | ${error.message}`);
  }
};

init();
