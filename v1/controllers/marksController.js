const Mark = require("../models/marksSchema");

const marksController = {
  // Get all marks
  async getAllMarks(req, res) {
    try {
      const marks = await Mark.find()
        .populate("student_id")
        .populate("subject_id");
      res.json(marks);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Get a single mark by ID
  async getMarkById(req, res) {
    try {
      const mark = await Mark.findById(req.params.id)
        .populate("student_id")
        .populate("subject_id");
      if (!mark) {
        return res.status(404).send("Mark not found");
      }
      res.json(mark);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Create a new mark
  async createMark(req, res) {
    try {
      const newMark = new Mark(req.body);
      await newMark.save();
      res.status(201).json(newMark);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Update a mark
  async updateMark(req, res) {
    try {
      const updatedMark = await Mark.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedMark) {
        return res.status(404).send("Mark not found");
      }
      res.json(updatedMark);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Delete a mark
  async deleteMark(req, res) {
    try {
      const mark = await Mark.findByIdAndDelete(req.params.id);
      if (!mark) {
        return res.status(404).send("Mark not found");
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = marksController;
