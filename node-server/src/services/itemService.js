const {
  fetchAllItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../repository/itemRepository");

const fetchAllItemsService = async (req, res) => {
  try {
    return await fetchAllItems(req, res);
  } catch (error) {}
};

const createItemService = async (req, res) => {
  try {
    return await createItem(req, res);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const updateItemService = async (req, res) => {
  try {
    return await updateItem(req, res);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const deleteItemService = async (req, res) => {
  try {
    return await deleteItem(req,res)
  } catch (error) {
    return error
  }
};

module.exports = {
  fetchAllItemsService,
  createItemService,
  updateItemService,
  deleteItemService,
};
