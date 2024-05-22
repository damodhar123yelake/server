const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  field_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Field",
    required: true,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
