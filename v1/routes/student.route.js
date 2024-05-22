const studentController = require("../controllers/studentController");
const router = require("express").Router();

// Student routes
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
