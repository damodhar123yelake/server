const router = require("express").Router();
require("./models/db");
router.use("/fields", require("./routes/field.route"));
router.use("/marks", require("./routes/mark.route"));
router.use("/students", require("./routes/student.route"));
router.use("/subjects", require("./routes/subject.route"));

module.exports = router;
