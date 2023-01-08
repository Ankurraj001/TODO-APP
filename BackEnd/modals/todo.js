const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
  showFlag: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
