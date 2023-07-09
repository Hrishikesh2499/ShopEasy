const express = require("express");
const router = express.Router();
// Import route files
const itemRoutes = require("./itemRoute");

// Add more route imports as needed

router.use("/item", itemRoutes);
// Register additional route files using similar syntax

module.exports = router;
