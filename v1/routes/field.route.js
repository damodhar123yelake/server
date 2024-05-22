const router = require("express").Router();
const fieldController = require("../controllers/fieldController");

// Field routes
router.get("/", fieldController.getAllFields);
router.get("/:id", fieldController.getFieldById);
router.post("/", fieldController.createField);
router.put("/:id", fieldController.updateField);
router.delete("/:id", fieldController.deleteField);

module.exports = router;
