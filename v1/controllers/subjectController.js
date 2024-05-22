const Subject = require("../models/subjectSchema");

const subjectController = {
  // Get all subjects
  getAllSubjects: async (req, res) => {
    try {
      const subjects = await Subject.find().populate("field_id");
      res.json(subjects);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Get a single subject by ID
  getSubjectById: async (req, res) => {
    try {
      const subject = await Subject.findById(req.params.id).populate(
        "field_id"
      );
      if (!subject) {
        return res.status(404).send("Subject not found");
      }
      res.json(subject);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  // Create a new subject
  createSubject: async (req, res) => {
    try {
      const newSubject = new Subject(req.body);
      await newSubject.save();
      res.status(201).json(newSubject);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Update a subject
  updateSubject: async (req, res) => {
    try {
      const updatedSubject = await Subject.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedSubject) {
        return res.status(404).send("Subject not found");
      }
      res.json(updatedSubject);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Delete a subject
  deleteSubject: async (req, res) => {
    try {
      const subject = await Subject.findByIdAndDelete(req.params.id);
      if (!subject) {
        return res.status(404).send("Subject not found");
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
module.exports = subjectController;
