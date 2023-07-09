const {
  fetchAllItemsService,
  createItemService,
  updateItemService,
  deleteItemService,
} = require("../services/itemService");
const { generateResponse, generateErrorResponse } = require("../utils");

const fetchAllItemsController = async (req, res) => {
  try {
    const items = await fetchAllItemsService(req, res);
    return res.json(generateResponse("Data Retrieved Successfully", items, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const createItemController = async (req, res) => {
  try {
    const items = await createItemService(req, res);
    return res.json(generateResponse("Data Created Successfully", items, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const updateItemController = async (req, res) => {
  try {
    const items = await updateItemService(req, res);
    return res.json(generateResponse("Data Updated Successfully", items, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const deleteItemController = async (req, res) => {
  try {
    const items = await deleteItemService(req, res);
    return res.json(generateResponse("Data Deleted Successfully", items, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

module.exports = {
  fetchAllItemsController,
  createItemController,
  updateItemController,
  deleteItemController,
};
