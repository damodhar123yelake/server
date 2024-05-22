const Field = require("../models/fieldSchema");

const fieldController = {
  // Get all fields
  getAllFields: async (req, res) => {
    try {
      const fields = await Field.find();
      res.json(fields);
    } catch (err) {
      console.error("Error fetching fields:", err); // Log the error
      res.status(500).send(err);
    }
  },

  // Get a single field by ID
  getFieldById: async (req, res) => {
    try {
      const field = await Field.findById(req.params.id);
      if (!field) {
        return res.status(404).send("Field not found");
      }
      res.json(field);
    } catch (err) {
      console.error("Error fetching field by ID:", err); // Log the error
      res.status(500).send(err);
    }
  },

  // Create a new field
  createField: async (req, res) => {
    try {
      const newField = new Field(req.body);
      await newField.save();
      res.status(201).json(newField);
    } catch (err) {
      console.error("Error creating field:", err); // Log the error
      res.status(400).send(err);
    }
  },

  // Update a field
  updateField: async (req, res) => {
    try {
      const updatedField = await Field.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedField) {
        return res.status(404).send("Field not found");
      }
      res.json(updatedField);
    } catch (err) {
      console.error("Error updating field:", err); // Log the error
      res.status(400).send(err);
    }
  },

  // Delete a field
  deleteField: async (req, res) => {
    try {
      const field = await Field.findByIdAndDelete(req.params.id);
      if (!field) {
        return res.status(404).send("Field not found");
      }
      res.status(204).send();
    } catch (err) {
      console.error("Error deleting field:", err); // Log the error
      res.status(500).send(err);
    }
  },
};

module.exports = fieldController;
