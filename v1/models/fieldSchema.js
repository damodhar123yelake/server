const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Field = mongoose.model("Field", fieldSchema);
module.exports = Field;
