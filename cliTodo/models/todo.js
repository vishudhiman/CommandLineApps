const mongoose = require("mongoose");

//customer schema

const todoSchema = mongoose.Schema({
  title: { type: String },
});

//define and exports

module.exports = mongoose.model("Todo", todoSchema);
