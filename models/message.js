const mongoose = require("mongoose");
const MongoSchema = mongoose.Schema;

// Create message Mongo Schema
const MessageSchema = new MongoSchema({
  from: String,
  chat: { type: Schema.Types.ObjectId, ref: "Chat" },
  body: String,
  created_at: Date,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
