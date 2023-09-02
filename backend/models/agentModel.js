const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An agent must have name"],
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    required: [true, "An agent must have a role"],
    default: "Not Disclosed",
  },
  q: {
    type: String,
    required: [true, "An agent must have a Q ability"],
  },
  e: {
    type: String,
    required: [true, "An agent must have a E ability"],
  },
  c: {
    type: String,
    required: [true, "An agent must have a C ability"],
  },
  x: {
    type: String,
    required: [true, "An agent must have a C ability"],
  },
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
