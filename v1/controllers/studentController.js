const Student = require("../models/studentSchema");

const studentController = {
  // Get all students
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find().populate("field_id");
      res.json(students);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Get a single student by ID
  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).populate(
        "field_id"
      );
      if (!student) {
        return res.status(404).send("Student not found");
      }
      res.json(student);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Create a new student
  createStudent: async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      await newStudent.save();
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Update a student
  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedStudent) {
        return res.status(404).send("Student not found");
      }
      res.json(updatedStudent);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Delete a student
  deleteStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).send("Student not found");
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
module.exports = studentController;
