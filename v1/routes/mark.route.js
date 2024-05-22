const marksController = require("../controllers/marksController");

const router = require("express").Router();
// Mark routes
router.get("/", marksController.getAllMarks);
router.get("/:id", marksController.getMarkById);
router.post("/", marksController.createMark);
router.put("/:id", marksController.updateMark);
router.delete("/:id", marksController.deleteMark);

module.exports = router;
