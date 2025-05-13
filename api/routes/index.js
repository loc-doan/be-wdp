
const express = require("express");
// const userRoutes = require("./user.routes");
const router = express.Router();

// Health check specific to API
router.get("/status", (req, res) => {
  res.status(200).json({ status: "API is running" });
});

// Mount routes
// router.use("/users", userRoutes);

module.exports = router;
