const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Mark = mongoose.model("Mark", marksSchema);
module.exports = Mark;
