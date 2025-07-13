const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  exportTasksReport,
  exportUsersReport,
} = require("../controller/reportController");

const router = express.Router();

// Export all tasks as Excel/PDF (admin-only)
router.get("/export/tasks", protect, adminOnly, exportTasksReport);

// Export user-task reports (admin-only)
router.get("/export/users", protect, adminOnly, exportUsersReport);

module.exports = router;
