const {
  addStudent,
  getStudent,
  updateStudent,
  deletStudent,
  addStudentFields,
  getStudentQuery,
  getStudentExcludeInclude,
  getStudentOperator,
} = require("../controller/student");
const express = require("express");
const router = express.Router();

router.post("/", addStudent);
router.get("/", getStudent);
router.get("/excludeinclude", getStudentExcludeInclude);
router.get("/operator/", getStudentOperator);
router.get("/:id", getStudentQuery);
router.post("/fields", addStudentFields);
router.put("/:id", updateStudent);
router.delete("/:id", deletStudent);

module.exports = router;
