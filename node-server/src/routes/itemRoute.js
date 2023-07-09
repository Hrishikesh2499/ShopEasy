const express = require("express");
const {
  fetchAllItemsController,
  createItemController,
  updateItemController,
  deleteItemController,
} = require("../controllers/itemController");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return await fetchAllItemsController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    return await createItemController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    return await updateItemController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    return await deleteItemController(req.params.id, res);
  } catch (error) {
    return res.json(error.message);
  }
});
module.exports = router;
