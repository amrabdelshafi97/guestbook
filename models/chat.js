const mongoose = require("mongoose");
const messageSchema = require("./message");
const MongoSchema = mongoose.Schema;

// Create Chat Mongo Schema
const ChatSchema = new MongoSchema({
  users: [String],
  title: {
    type: String,
    required: true
  },
  messages: [messageSchema],
  created_at: Date,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", ChatSchema);
